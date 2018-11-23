import { Routes, RouterModule} from '@angular/router';

//importo los componentes
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RestauranteComponent } from './components/restaurante/restaurante.component';


//creo arreglo de rutas
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'restaurante/:id', component: RestauranteComponent }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash:true});