import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { RestService } from '../../servicios/rest.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  restaurante:any = {};

  constructor(private rest: RestService, private activatedRoute: ActivatedRoute, private router: Router ) { 
    this.activatedRoute.params.subscribe( params =>{
      this.restaurante = this.rest.getComida( params['id'] );
      // console.log(this.heroe);

  });
  }

  ngOnInit() {
  }

  volver(){
    this.rest.reset();
    this.router.navigate( ['/home'] );
  }

}
