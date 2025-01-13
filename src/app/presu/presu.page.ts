import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-presu',
  templateUrl: './presu.page.html',
  styleUrls: ['./presu.page.scss'],
})
export class PresuPage {

  constructor(private router: Router, private navCtrl: NavController) {}
  
    logout() {
     
      console.log('Cerrando sesión...');
      
   
      this.router.navigate(['/login']);
      
     
    }
  }