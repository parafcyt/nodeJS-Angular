import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { RestService } from '../../servicios/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  private restaurantes;

  constructor(public rest: RestService, private router: Router) { 
    this.restaurantes = rest.getRestaurantes();
   }

  buscar( termino:string ){
    this.restaurantes = this.rest.buscarComida( termino );
  }

  ver(index){
    this.router.navigate( ['/restaurante', index] );
  }

}
