import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../providers/auth.service';

import 'rxjs/Rx';

import { Mensaje } from "../interface/mensaje.interface";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];

  constructor( private afs: AngularFirestore, public authService: AuthService ) { }

  // Este metod constructor, debe de regresar una promesa - observable
  cargarMensajes(){
       this.itemsCollection = this.afs.collection<Mensaje>('chats',ref =>ref.orderBy('fecha', 'desc')  //ref: le paso la query para ordenar los chats en firebase
                                                                            .limit(5))

       return this.itemsCollection.valueChanges() //esto es un observable, retorno el objeto de chats
                                  .map( (mensajes: Mensaje[]) =>{ // devuelvo un arreglo de mensajes
                                  console.log(mensajes);

                                  this.chats = [];

                                  for (let mensaje of mensajes){
                                    this.chats.unshift(mensaje); // inserto siempre en la posicion primera
                                  }
                                  return this.chats;
                                })   // .map() trabaja con la respuesta de un observable, la transforma y devuelve una subcripcion
  }

  //Logica para hacer la insercion de mensajes a Firebase
  agregarMensaje( texto: string){

  //creo la estructura completa del mensaje
  //TODO falta el UID del usuario
  let mensaje: Mensaje = {
  nombre: this.authService.afAuth.auth.currentUser.email,
  mensaje:texto,
  fecha: new Date().getTime()

}

return this.itemsCollection.add(mensaje);// Devuelve una promesa (then o catch)

 }
}
