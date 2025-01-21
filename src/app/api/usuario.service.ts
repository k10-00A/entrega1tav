import { Injectable } from '@angular/core';
import { Observable ,retry} from 'rxjs';
import { HttpClient, HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  apiUrl = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' 
    })
  };

  constructor(private http:HttpClient) { }

  registrarUsuario(user:any): Observable<any> {
    
    return this.http.post(`${this.apiUrl}/usuario`, user, this.httpOptions);
  }

  verificarEmailExistente(email: string) {
    return this.http.get<boolean>(`${this.apiUrl}/usuario?email=${email}`);
  }
 
//  validarUsuario(email: string, password: any): Observable<any>  {
//    const url = `${this.apiUrl}/usuario?email=${email}&password=${password}`;
//    return this.http.get(url,this.httpOptions);
//  }


   obtenerUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuario`, this.httpOptions);
  }


  validarUsuario(email: string, password: string): Observable<any> {
    return this.obtenerUsuarios(); 
  }

}

