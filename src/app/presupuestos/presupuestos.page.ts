import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../api/presupuesto.service';
import { Router } from '@angular/router';
import { Presupuesto } from '../models/presupuesto.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.page.html',
  styleUrls: ['./presupuestos.page.scss'],
})
export class PresupuestosPage implements OnInit {

  nombre: string = '';
  f_inicio: string = '';
  f_corte: string = '';

  constructor(
    private presupuestoService: PresupuestoService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  crearPresupuesto() {
    const presupuesto = {
      nombre: this.nombre,
      f_inicio: this.f_inicio,
      f_corte: this.f_corte
    };

    this.presupuestoService.crearPresupuesto(presupuesto).subscribe(
      (response) => {
        console.log('Presupuesto creado:', response);
        this.navCtrl.navigateRoot('/inicio');
      },
      (error) => {
        console.error('Error al crear presupuesto:', error);
      }
    );
  }
}
