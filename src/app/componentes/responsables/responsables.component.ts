import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/servicios/main.service';

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {

  auditDocument: any;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getAuditDocuments();
  }

  getAuditDocuments() {
    this.mainService.getAuditDocuments().subscribe( data => {
      this.auditDocument = data;
      console.log("call 1");
      console.log(this.auditDocument);
    }, error => {
      console.log("fallo el call de la API2");
      console.log(error);
    });
  }
}































// getMascotas(): void {
//   this.mascotaService.getMascotas().subscribe(mascota => {
//     this.listaMascotas = mascota;
//     console.log(this.listaMascotas);
//   });

// cargarNuevaMascota(mascota): void{
//   this.publicacionesService.postMascota(mascota).subscribe((response :any) => {
//     console.log("aca esta la data");
//     console.log(response);
//     console.log(response.idmascota);
//     this.publicacion.idmascota = response.idmascota;
//     console.log(this.publicacion);
//     this.cargarNuevaPublicacion(this.publicacion);
//   },
//     error => {
//       console.log("fallo el call de la API");
    
//       console.log(error)
//  });;
// }

// cargarNuevaPublicacion(publicacion): void{
//   this.publicacionesService.postPublicacion(publicacion).subscribe((response :any) => {
//     console.log(response);
//   },
//     error => {
//       console.log("fallo el call de la API");
//       console.log(error)
//  });;
// }