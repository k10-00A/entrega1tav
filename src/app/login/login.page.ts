import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../api/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: any = '';  
  usuario: any;
  mensajeError: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
  }

  buscarUsuario() {
   
    if (!this.email || !this.password) {
      this.mensajeError = 'Por favor ingrese ambos campos (email y password).';
      return;
    }

    this.usuarioService.validarUsuario(this.email, this.password).subscribe(
      (res) => {
        this.usuario = res; 
        console.log('Usuario encontrado:', this.usuario);
        this.mensajeError = ''; 
        
        this.router.navigate(['/inicio']); 
      },
      (err) => {
        
        if (err.status === 404) {
          this.mensajeError = 'Usuario o password incorrectos';
        } else {
          this.mensajeError = 'Error al intentar ingresar. Intente nuevamente.';
        }
        console.log('Error al buscar el usuario:', err);
      }
    );
  }
}

