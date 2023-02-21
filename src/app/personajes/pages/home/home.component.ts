import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje } from '../../interfaces/personaje.interface';

import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rick!: Personaje;
  morty!: Personaje;

  constructor(private personajeService: PersonajesService, private router: Router){}

  ngOnInit(){
     this.getRick();
     this.getMorty();
  }


  getRick(){
    this.personajeService.buscarPersonaje("1").subscribe(personaje => {
      this.rick = personaje;
    })
  }


  getMorty(){
    this.personajeService.buscarPersonaje("2").subscribe(personaje => {
      this.morty = personaje;
    })
  }


  navegar(id: any){
    this.router.navigate([`personaje/${id}`])
    
  }

}
