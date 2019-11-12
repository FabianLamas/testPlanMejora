import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
=======
import { NgForm, FormsModule } from '@angular/forms';
import { MainService } from '../../servicios/main.service';
import { Usuario } from '../../modelos/usuario';
>>>>>>> 9d994122b293e3cd658925db80456881eefe5ff9

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: Usuario[] = [];
  ok: boolean;
  datosUsuario: any;

  constructor( private usersService: MainService ) { }

  ngOnInit() {
<<<<<<< HEAD
    
=======
    this.users = this.usersService.getUsers();
>>>>>>> 9d994122b293e3cd658925db80456881eefe5ff9
  }

  login(formLogin: NgForm) {
    
    this.datosUsuario = formLogin.value;
    this.ok = false;

    for (let i = 0; i < this.users.length; i++) {

      if (this.users[i].user == this.datosUsuario.user && this.users[i].pass == this.datosUsuario.pass) {
        console.log('Aceptado');
        this.ok = true;
      }
    }

    if (this.ok) {
      
    } else {
      this.ok = false;
      console.log('Rechazado');
    }

  }
}
