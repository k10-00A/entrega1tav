import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gasto, Pago } from '../models/gasto.model';
import { Observable } from 'rxjs';
import { CategoriaService } from './categoria.service';
import { formatDate } from '@angular/common'; 

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  apiUrl = 'http://localhost:3000/gastos'; 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient, private categoriaService: CategoriaService) {}

  registrarGasto(gasto: Gasto): Observable<Gasto> {
    if (gasto.tipo === 'credito' && gasto.cuotas && gasto.cuotas > 0) {
      const pagos: Pago[] = this.generarPagosCredito(gasto);
      gasto.pagos = pagos;
    }
    
    return this.http.post<Gasto>(this.apiUrl, gasto, this.httpOptions);
  }

  generarPagosCredito(gasto: Gasto): Pago[] {
    const pagos: Pago[] = [];
    const fechaInicial = new Date(gasto.fecha);
    const montoPorCuota = gasto.monto / gasto.cuotas;

    for (let i = 0; i < gasto.cuotas; i++) {
      const fechaPago = new Date(fechaInicial);
      fechaPago.setMonth(fechaPago.getMonth() + i); 

      pagos.push({
        monto: montoPorCuota,
        fecha: formatDate(fechaPago, 'yyyy-MM-dd', 'en-US')
      });
    }

    return pagos;
  }

  obtenerGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.apiUrl);
  }
}