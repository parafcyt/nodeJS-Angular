import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor() { }

  mostrar:boolean = true;
  texto:string = "Ocultar";

  personas:object = [
    {edad: 18, nombre: "Pedro Aranda"},
    {edad: 23, nombre: "Rosa Pascal"},
    {edad: 16, nombre: "Julio Aregui"},
    {edad: 12, nombre: "Juan Peralta"},
    {edad: 16, nombre: "Marcos Suarez"},
    {edad: 34, nombre: "Alexis Morison"}
  ];

  cambiar() {
    if (this.mostrar) {
      this.texto="Mostrar"
      this.mostrar = false;
    }
    else{
      this.texto="Ocultar"
      this.mostrar = true;
    }
    //this.mostrar = !this.mostrar;
  }
  
}
