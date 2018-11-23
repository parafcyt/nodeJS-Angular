import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { PersonajesService } from '../../servicios/personajes.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent{

  personaje:any = {};

  constructor( private activatedRoute: ActivatedRoute, 
    private _personajeService: PersonajesService ){

    this.activatedRoute.params.subscribe( params =>{
        this.personaje = this._personajeService.getPersonaje( params['id'] );
        // console.log(this.heroe);

    });

  }

}
