import { Component, OnInit } from '@angular/core';
import { GastoService } from '../api/gasto.service';
import { CategoriaService } from '../api/categoria.service';
import { Gasto, Pago } from '../models/gasto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-gasto',
  templateUrl: './registro-gasto.page.html',
  styleUrls: ['./registro-gasto.page.scss'],
})
export class RegistroGastoPage implements OnInit {

  categorias: any[] = [];  
  monto: number = 0;
  fecha: string = '';
  descripcion: string = '';
  tipo: 'debito' | 'credito' = 'debito';
  cuotas: number = 0;
  categoriaId: number = 0; 

  constructor(
    private gastoService: GastoService,
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  ngOnInit() {
 
    this.categoriaService.obtenerCategorias().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (err) => {
        console.error('Error al obtener las categorías:', err);
      }
    });
  }

  registrarGasto() {
    if (this.tipo === 'credito' && this.cuotas <= 0) {
      alert('Por favor ingresa la cantidad de cuotas.');
      return;
    }

    const nuevoGasto: Gasto = {
      id: Date.now(), 
      categoriaId: this.categoriaId,   
      monto: this.monto,
      fecha: this.fecha,
      descripcion: this.descripcion,
      tipo: this.tipo,
      cuotas: this.tipo === 'credito' ? this.cuotas : 0,
      pagos: this.tipo === 'credito' ? this.generarPagos() : []
    };

    this.gastoService.registrarGasto(nuevoGasto).subscribe({
      next: (gastoRegistrado) => {
        console.log('Gasto registrado exitosamente', gastoRegistrado);
        this.router.navigate(['/inicio']); 
      },
      error: (err) => {
        console.error('Error al registrar gasto:', err);
      }
    });
  }

  generarPagos(): Pago[] {
    const pagos: Pago[] = [];
    const fechaInicio = new Date(this.fecha);  
    for (let i = 0; i < this.cuotas; i++) {
      const fechaPago = new Date(fechaInicio);
      fechaPago.setMonth(fechaPago.getMonth() + i); 
      pagos.push({
        monto: this.monto / this.cuotas,
        fecha: fechaPago.toISOString().split('T')[0]
      });
    }
    return pagos;
  }

  logout() {
    
    console.log('Cerrando sesión...');
    
    
    this.router.navigate(['/login']);
  }
}