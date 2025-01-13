import { Component, OnInit  } from '@angular/core';
import { UsuarioService } from '../api/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  user:any={
    nombre:'',
    email:'',
    password:'',
    f_nacimiento:'',
    genero:''
  }
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  registrar(){
    console.log('Registrando...');
    console.log(this.user.nombre);

    this.usuarioService.registrarUsuario(this.user).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    );

  }

}
