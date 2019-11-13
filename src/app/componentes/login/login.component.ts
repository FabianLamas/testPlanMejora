import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { MainService } from '../../servicios/main.service';
import { Usuario } from '../../modelos/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: Usuario[] = [];
  ok: boolean;
  datosUsuario: any;

  constructor( private usersService: MainService, private router: Router ) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  login(formLogin: NgForm) {
    this.datosUsuario = formLogin.value;
    this.ok = false;

    for (let i = 0; i < this.users.length; i++) {

      if (this.users[i].user === this.datosUsuario.user && this.users[i].pass === this.datosUsuario.pass) {
        console.log('Aceptado');
        this.ok = true;
      }
    }

    if (this.ok) {
      this.router.navigate( ['/responsables'] );
    } else {
      this.ok = false;
      console.log('Rechazado');
    }

  }
}
