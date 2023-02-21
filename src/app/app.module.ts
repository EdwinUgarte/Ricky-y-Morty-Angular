import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import {HttpClientModule} from '@angular/common/http'
import { PersonajesModule } from './personajes/personajes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    PersonajesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
