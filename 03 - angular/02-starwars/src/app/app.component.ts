import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nombre para invocar al componente
  templateUrl: './app.component.html', //ruta de html
  styleUrls: ['./app.component.css'] //rutas de css
})
export class AppComponent { //exporto par apoder usarla, en esta clase está la lógica del componente
  title = 'starwars'; //variable titulo en el browser
}
