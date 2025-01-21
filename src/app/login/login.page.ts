import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../api/usuario.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: any = '';  
  usuario: any;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router,public toastController: ToastController) {}

  ngOnInit() {
  }

  login() {
    
    this.errorMessage = '';
    this.successMessage = '';
  
    
    if (!this.email.trim() || !this.password.trim()) {
      this.presentToast("Por favor ingresa ambos campos: correo y contraseña.");
      return; 
    }
  
    
    this.usuarioService.validarUsuario(this.email, this.password).subscribe({
      next: (users: User[]) => {
        const user = users.find(u => u.email === this.email && u.password === this.password);
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.successMessage = 'Inicio de sesión exitoso. Redirigiendo...';
          this.router.navigate(['/inicio']); 
        } else {
          this.presentToast("Correo o contraseña incorrectos.");
        }
      },
      error: (err) => {
        console.error('Error al intentar iniciar sesión:', err);
        this.presentToast("Hubo un problema con la conexión o la consulta.");
      }
    });
  }

  
  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }
}

