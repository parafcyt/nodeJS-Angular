import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(public afAuth: AngularFireAuth) { }

  registrarUsuario(email: string, pass: string){
    return new Promise((resolve, reject) => {
    this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
    .then( userData => resolve(userData),
    err => reject(err));
  });
  }

  ingresarEmail(email: string, pass: string){
    return new Promise((resolve, reject) => {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass)
    .then( userData => resolve(userData),
    err => reject(err));
  });
  }

  getAuth(){
    return this.afAuth.authState.map (auth => auth);
  }

  logOut(){
    return this.afAuth.auth.signOut();
  }

  ingresarGoogle(){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( userData => resolve(userData),
    err => reject(err));
  });
  }

  ingresarFacebook(){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( userData => resolve(userData),
    err => reject(err));
  });
  }

}
