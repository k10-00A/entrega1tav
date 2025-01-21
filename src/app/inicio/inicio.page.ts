import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {


  username: string = '';

  constructor(private router: Router, private navCtrl: NavController) {}
  
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser')!);
    if (user) {
      this.username = user.nombre;
    }
  }

  logout() {
    
    console.log('Cerrando sesión...');
    
    
    this.router.navigate(['/login']);
  }
  
}
