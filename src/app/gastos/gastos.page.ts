import { Component } from '@angular/core';
import { GastoService } from '../api/gasto.service';
import { Gasto } from '../models/gasto.model';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage {

  gastos: Gasto[] = [];

  constructor(private gastoService: GastoService,private router: Router,private navCtrl: NavController) {}

  ngOnInit() {
    this.obtenerGastos();
  }

  obtenerGastos() {
    this.gastoService.obtenerGastos().subscribe({
      next: (gastos) => {
        this.gastos = gastos;
        console.log('Gastos obtenidos:', this.gastos);
      },
      error: (err) => {
        console.error('Error al obtener gastos:', err);
      }
    });
  }

  logout() {
    
    console.log('Cerrando sesión...');
    
    
    this.router.navigate(['/login']);
  }
}