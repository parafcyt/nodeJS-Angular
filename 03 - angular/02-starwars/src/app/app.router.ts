import { Routes, RouterModule} from '@angular/router';

//importo los componentes
import { HomeComponent } from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {PersonajesComponent} from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

//creo arreglo de rutas
const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'home', component: HomeComponent},
    { path: 'about' , component: AboutComponent}, //la ruta /about en el browser
    { path: 'personajes', component: PersonajesComponent},
    { path: 'personaje/:id', component: PersonajeComponent  },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash:true});