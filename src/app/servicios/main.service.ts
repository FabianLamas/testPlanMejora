import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuditDocument } from '../modelos/auditDocument';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  user1: Usuario = new Usuario();
  user2: Usuario = new Usuario();

  constructor(private http: HttpClient) { }

  getAuditDocuments(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:62889/api/Grupos/Listar');
  }
}























// getMascotas(): Observable<Mascota[]> {
//   return this.http.get<Mascota[]>('https://localhost:44313/api/Mascotas/listar');
// }

// getPublicaciones(): Observable<Publicacion[]>{
//   return this.http.get<Publicacion[]>(this.urlPublicaciones+'Listar');
// }

// getPublicacion(id: number): Observable<Publicacion> {
//   return this.http.get<Publicacion>(this.urlPublicaciones+'Mostrar/'+id);
// }

// postPublicacion(publicacion: Publicacion): Observable<Publicacion>{
//   return this.http.post<Publicacion>(this.urlPublicaciones+'Crear', publicacion);
// }

// postMascota(mascota: Mascota){
//   return this.http.post('https://localhost:44313/api/Mascotas/Crear', mascota);
// }