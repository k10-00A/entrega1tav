import { Injectable } from '@angular/core';
import { Observable ,retry} from 'rxjs';
import { HttpClient, HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  apiUrl = 'https://cea40787-eef5-43ae-bc19-6ab28917eac8-00-vzq7vd38xk4p.kirk.replit.dev';
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

  validarUsuario(email: string, password: any): Observable<any>  {
  
    const url = `${this.apiUrl}/validar-usuario?email=${email}&password=${password}`;
    return this.http.get(url);
  }

}

