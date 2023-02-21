import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  id: any;
  personaje =  {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: ""
    },
    location: {
      name: "",
      url: ""
    },
    image: "",
   

  }



  constructor(private routeActive: ActivatedRoute, private personajeService: PersonajesService){}

  ngOnInit(){

    this.routeActive.params.subscribe(({id}) => {
      this.id = id;
    })

    this.personajeService.buscarPersonaje(this.id).subscribe(personaje => {
      this.personaje = personaje
    })
    

  }


  





}
