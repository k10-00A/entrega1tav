import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PresupuestoService } from '../api/presupuesto.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {


  username: string = '';

  presupuestos: any[] = [];

  constructor(private router: Router, private navCtrl: NavController,private presupuestoService: PresupuestoService) {}
  
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser')!);
    if (user) {
      this.username = user.nombre;
    }

    this.cargarPresupuestos();
  }

  logout() {
    
    console.log('Cerrando sesión...');
    
    
    this.router.navigate(['/login']);
  }

  cargarPresupuestos() {
    this.presupuestoService.obtenerPresupuestos().subscribe(
      (response) => {
        this.presupuestos = response;  // Asignamos la respuesta al array de presupuestos
      },
      (error) => {
        console.error('Error al cargar presupuestos:', error);
      }
    );
  }
  
}
