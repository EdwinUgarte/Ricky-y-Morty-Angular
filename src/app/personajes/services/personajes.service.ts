import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Personaje, Respuesta } from '../interfaces/personaje.interface';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  endPoint: string = 'https://rickandmortyapi.com/api/character'


  constructor(private http: HttpClient) { }


  cargarPersonajes(): Observable<Respuesta>{
    return this.http.get<Respuesta>(this.endPoint);
  }


  buscarPersonaje(id: string): Observable<Personaje>{
    return this.http.get<Personaje>(`${this.endPoint}/${id}`);
  }

}
