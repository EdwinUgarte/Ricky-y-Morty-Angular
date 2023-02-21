import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import {Router} from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  personaje! : Personaje;

  constructor(private router: Router){}



  navegar(){
    this.router.navigate([`personaje/${this.personaje.id}`])
  }


}
