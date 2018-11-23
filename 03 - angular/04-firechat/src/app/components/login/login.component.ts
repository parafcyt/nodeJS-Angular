import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  ingresar(){

      this.authService.ingresarEmail(this.email, this.password)
      .then((res) => {
        this.router.navigate(['chat']);
      }).catch((err) => {
        console.log(err);
        this.ingresar2();
      });
  
  }

  ingresar2(){
    this.authService.registrarUsuario(this.email, this.password)
      .then((res) => {
        this.router.navigate(['chat']);
      }).catch((err) => {
        console.log(err);
      });
  }

  ingresarGoogle(){
    this.authService.ingresarGoogle()
      .then((res) => {
        this.router.navigate(['chat']);
      }).catch((err) => {
        console.log(err);
        this.ingresar2();
      })
  }

  ingresarFacebook(){
    this.authService.ingresarFacebook()
      .then((res) => {
        this.router.navigate(['chat']);
      }).catch((err) => {
        console.log(err);
        this.ingresar2();
      })
  }

}
