import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{

  personajes : Personaje[] = [];

  constructor(private personajesService: PersonajesService){}

  ngOnInit(){
    this.getPersonajes()
  }
  
  
  getPersonajes(){
    this.personajesService.cargarPersonajes().subscribe(respuesta => {
      this.personajes = respuesta.results
    })
  }
  

}
