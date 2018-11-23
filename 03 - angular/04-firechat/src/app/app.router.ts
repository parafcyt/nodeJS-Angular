import { Routes, RouterModule} from '@angular/router';

//importo los componentes
import { LoginComponent } from './components/login/login.component';
import { ChatsComponent } from './components/chats/chats.component';


//creo arreglo de rutas
const routes: Routes = [
    { path: '', component: LoginComponent }, 
    { path: 'chat', component: ChatsComponent}
];

export const APP_ROUTING = RouterModule.forRoot(routes);