import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService, Personaje } from '../../servicios/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  implements OnInit {

  personajes:Personaje[] = []; // creo una variable de arreglos de heroes

  // el constructor se ejecuta antes que el ngOnInit
  constructor( private _personajesService: PersonajesService,
               private router:Router
                ) {
    //console.log("constructor");
  }
  // el ngOnInit nos permite renderizar un componente cuando la pagina ya esta actualizada
  ngOnInit() {
    this.personajes = this._personajesService.getPersonajes();// utulizo el servicio
    //console.log( this.heroes );
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/personaje',idx] );
  }

}
