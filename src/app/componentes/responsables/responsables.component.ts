import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/servicios/main.service';
import { AuditDocument } from '../../modelos/auditDocument';
import { NonConformanceDocument } from '../../modelos/nonConformanceDocument';
import { ListaResponsables } from '../../modelos/listaResponsables';
import { log } from 'util';

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {

  auditDocumentList: AuditDocument[];
  nonConformanceDocumentList: NonConformanceDocument[];
  listaResponsables: ListaResponsables[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getAuditDocuments();
    this.getNonConformanceDocuments();
  }

  generarLista() {

    for (let i = 0; i < this.nonConformanceDocumentList.length; i++) {

      for (let j = 0; j < this.auditDocumentList.length; j++) {

        if (this.nonConformanceDocumentList[i].auditDocument === this.auditDocumentList[j].id) {
              // tslint:disable-next-line:max-line-length
              var itemListaResp: ListaResponsables = new ListaResponsables( this.auditDocumentList[j].auditNumber, 'En proceso', this.nonConformanceDocumentList[i].number,'Fabian Lamas',this.nonConformanceDocumentList[i].creationStamp,5,this.nonConformanceDocumentList[i].sector,'Reclamos clientes',this.nonConformanceDocumentList[i].topic,'Naranja',this.nonConformanceDocumentList[i].size,this.nonConformanceDocumentList[i].responsible,this.nonConformanceDocumentList[i].answerType );
        }
      }
      this.listaResponsables.push(itemListaResp);
    }

    console.log(this.listaResponsables[1].number);
  }

  getAuditDocuments() {
    this.mainService.getAuditDocuments().subscribe( data => {
      this.auditDocumentList = data;
      console.log('call API getAuditDocuments');
      console.log(this.auditDocumentList);
    }, error => {
      console.log('fallo el call de la API getAuditDocuments');
      console.log(error);
    });
  }

  getNonConformanceDocuments() {
    this.mainService.getNonConformanceDocuments().subscribe( data => {
      this.nonConformanceDocumentList = data;
      console.log('call API getNonConformanceDocuments');
      console.log(this.nonConformanceDocumentList);
    }, error => {
      console.log('fallo el call de la API getNonConformanceDocuments');
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