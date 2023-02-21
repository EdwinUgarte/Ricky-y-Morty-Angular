import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './personajes/pages/home/home.component';
import { ListadoComponent } from './personajes/pages/listado/listado.component';
import { PersonajeComponent } from './personajes/pages/personaje/personaje.component';


const routes : Routes = [
  {path:'home', component: HomeComponent},
  {path:'listado', component: ListadoComponent},
  {path:'personaje', component: PersonajeComponent},
  {path:'personaje/:id', component: PersonajeComponent},
  {path:'**', redirectTo:'/home'},


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
