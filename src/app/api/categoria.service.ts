import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../models/categoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiUrl = 'http://localhost:3000/categorias'; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {}

  obtenerCategorias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  registrarCategoria(nombre: string): Observable<Categoria> {
    const nuevaCategoria: Categoria = {
      id: Date.now(),  
      nombre: nombre
    };
    return this.http.post<Categoria>(this.apiUrl, nuevaCategoria, this.httpOptions);
  }
}