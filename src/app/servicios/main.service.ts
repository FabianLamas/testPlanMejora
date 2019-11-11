import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private users: Usuario[] = [
    {
      user: 'fabi',
      pass: '123',
      nombre: 'fabian',
      apellido: 'lamas',
      mail: 'fabian.lamas@kof.com.mx'
    },
    {
      user: 'ian',
      pass: '123',
      nombre: 'ian',
      apellido: 'clavero',
      mail: 'ian.clavero@kof.com.mx'
    }
  ];

  getUsers() {
    return this.users;
  }

  constructor() { }

  }


