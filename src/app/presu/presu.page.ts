import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-presu',
  templateUrl: './presu.page.html',
  styleUrls: ['./presu.page.scss'],
})
export class PresuPage {

  budgetName: string = '';
  amount: number | null = null;
  date: string = '';
  category: string = '';
  paymentMethod: string = '';
  imageFile: string | null = null;

  constructor(private router: Router, private navCtrl: NavController) {}
  
  onSelectImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file.name;
    }
  }


  
    logout() {
     
      console.log('Cerrando sesión...');
      
   
      this.router.navigate(['/login']);
      
     
    }

    onSubmit() {
      if (this.budgetName || this.amount || this.date || this.category || this.paymentMethod) {
        alert('Por favor, complete todos los campos.');
        return;
      
      
      }
     
      console.log('Presupuesto:', this.budgetName);
      console.log('Monto:', this.amount);
      console.log('Fecha:', this.date);
      console.log('Categoría:', this.category);
      console.log('Forma de pago:', this.paymentMethod);
      console.log('Imagen seleccionada:', this.imageFile);
  
      alert('Formulario enviado con éxito!');

    }
    
    


}