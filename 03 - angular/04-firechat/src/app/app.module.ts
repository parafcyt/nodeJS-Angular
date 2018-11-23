import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule} from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

//Adding the Firebase Database and Auth Modules

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

//servicios
import { ChatService } from './providers/chat.service';
import { AuthService } from './providers/auth.service';

// componentes
import { ChatsComponent } from './components/chats/chats.component';
import { LoginComponent } from './components/login/login.component';

// rutas
import { APP_ROUTING } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    ChatsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    ChatService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
