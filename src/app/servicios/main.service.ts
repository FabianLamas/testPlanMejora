import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuditDocument } from '../modelos/auditDocument';
import { NonConformanceDocument } from '../modelos/nonConformanceDocument';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  user1: Usuario = new Usuario();
  user2: Usuario = new Usuario();

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

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.users;
  }

  getAuditDocuments(): Observable<AuditDocument[]> {
    return this.http.get<AuditDocument[]>('http://localhost:62889/api/AuditDocuments/Listar');
  }
  getNonConformanceDocuments(): Observable<NonConformanceDocument[]> {
    return this.http.get<NonConformanceDocument[]>('http://localhost:62889/api/NonConformanceDocuments/Listar');
  }
}


