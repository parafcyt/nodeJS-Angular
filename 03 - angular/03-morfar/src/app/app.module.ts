import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// rutas
import { APP_ROUTING } from './app.router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { RestService } from './servicios/rest.service';
import { RestauranteComponent } from './components/restaurante/restaurante.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    RestauranteComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
