import { Component, OnInit  } from '@angular/core';
import { UsuarioService } from '../api/usuario.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  user: any = {
    nombre: '',
    email: '',
    password: '',
    f_nacimiento: '',
    genero: ''
  };
  mensajeError: string = '';
  
  constructor(private usuarioService: UsuarioService, public toastController: ToastController, private router: Router) { }
  
  ngOnInit() { }
  
  async registrar() {
    console.log('Registrando...');
    
    if (this.user.nombre == "") {
      this.mensajeError = 'Por favor, complete todos los campos.';
      console.log(this.mensajeError);
      this.presentToast("Faltan campos por completar ");
      return;  
    }

    const emailExistente = await this.usuarioService.verificarEmailExistente(this.user.email).toPromise();
    if (emailExistente) {
      this.mensajeError = 'Este correo ya está registrado.';
      console.log(this.mensajeError);
      this.presentToast(this.mensajeError);
      return;
    }
  
   
    this.usuarioService.registrarUsuario(this.user).subscribe(
      (res) => {
        console.log('Registro exitoso:', res);
        this.mensajeError = ''; 
        this.router.navigate(['/login']);
        alert('Registro exitoso. Bienvenido!');  
        
      },
      (err) => {
        console.log('Error en el registro:', err);
        
        this.mensajeError = 'Hubo un error al registrar el usuario. Intenta nuevamente.';
      }
    );
  }

  /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
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
