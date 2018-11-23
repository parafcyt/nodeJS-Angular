import { Component, OnInit } from '@angular/core';
//injecto el servicio de chat.service
import { ChatService } from '../../providers/chat.service';
import { log } from 'util';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styles: []
})
export class ChatsComponent  implements OnInit {

  mensaje:string = "";
  elemento: any;

  constructor( public _cs: ChatService, public authService: AuthService, public router: Router ) {
 //recibimos el observable del obejeto chat
    this._cs.cargarMensajes()
          .subscribe(()=>{

            setTimeout(()=>{
              this.elemento.scrollTop = this.elemento.scrollHeight;
            },20);
          }); // cuando recibo los mensaje muevo el foco al final
  }

  ngOnInit() {
    // hago la referencia del elemento del html
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje(){
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
        return;
    }
    this._cs.agregarMensaje(this.mensaje)
            // .then( ()=>console.log('Mensaje enviado') )
            .then(()=>this.mensaje="")
            .catch( (err)=>console.log('Error al enviar', err));
  }

  yo(chat){
    if (chat.nombre==this.authService.afAuth.auth.currentUser.email) {
      return true;
    }
    else{
      return false;
    }
  }

  otro(chat){
    if (chat.nombre!=this.authService.afAuth.auth.currentUser.email) {
      return true;
    }
    else{
      return false;
    }
  }

  salir(){
    this.authService.logOut();
    this.router.navigate(['']);
  }

}
