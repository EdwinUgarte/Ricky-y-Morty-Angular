import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { CardComponent } from './components/card/card.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    PersonajeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PersonajesModule { }
