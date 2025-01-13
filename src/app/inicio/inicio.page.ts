import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(private router: Router, private navCtrl: NavController) {}

  logout() {
    
    console.log('Cerrando sesión...');
    
    
    this.router.navigate(['/login']);
    
 
  }
}
