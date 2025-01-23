import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Presupuesto } from '../models/presupuesto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  apiUrl = 'http://localhost:3000'; 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  crearPresupuesto(presupuesto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/presupuestos`, presupuesto);
  }

  obtenerPresupuestos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/presupuestos`);
  }
}
