import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MainService } from 'src/app/servicios/main.service';
import { AuditDocument } from '../../modelos/auditDocument';
import { NonConformanceDocument } from '../../modelos/nonConformanceDocument';
import { ListaResponsables } from '../../modelos/listaResponsables';


export interface UserData {
  auditNumber: string;
  estadoActual: string;
  number: number;
  author: string;
  creationStamp: Date;
  dias: number;
  sector: string;
  origenPlanMejora: string;
  topic: string;
  sabor: string;
  size: string;
  responsible: string;
  answerType: string;
}

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {

  displayedColumns: string[] = ['auditNumber', 'estadoActual', 'number', 'author',
                                'creationStamp', 'dias', 'sector', 'origenPlanMejora',
                                'topic', 'sabor', 'size', 'responsible', 'answerType',
                                ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  auditDocumentList: AuditDocument[];
  nonConformanceDocumentList: NonConformanceDocument[];
  listaResponsables: ListaResponsables[] = [];

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.getAuditDocuments();
    this.getNonConformanceDocuments();
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    
  }

  generarLista() {
// tslint:disable-next-line: prefer-for-of
    if(this.auditDocumentList == undefined || this.nonConformanceDocumentList == undefined) return
    for (let i = 0; i < this.nonConformanceDocumentList.length; i++) {
// tslint:disable-next-line: prefer-for-of
      for (let j = 0; j < this.auditDocumentList.length; j++) {
        if (this.nonConformanceDocumentList[i].auditDocument === this.auditDocumentList[j].id) {
// tslint:disable-next-line: max-line-length
          var itemListaResp: ListaResponsables = new ListaResponsables( this.auditDocumentList[j].auditNumber, 'En proceso', this.nonConformanceDocumentList[i].number,'Fabian Lamas', this.nonConformanceDocumentList[i].creationStamp, 5 , this.nonConformanceDocumentList[i].sector, 'Reclamos clientes', this.nonConformanceDocumentList[i].topic,'Naranja', this.nonConformanceDocumentList[i].size,this.nonConformanceDocumentList[i].responsible, this.nonConformanceDocumentList[i].answerType );
        }
      }
      this.listaResponsables.push(itemListaResp);
    }
    this.dataSource = new MatTableDataSource(this.listaResponsables);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);

  }

  getAuditDocuments() {
    this.mainService.getAuditDocuments().subscribe( data => {
      this.auditDocumentList = data;
      console.log('call API getAuditDocuments');
      console.log(this.auditDocumentList);
      this.generarLista();
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
      this.generarLista();
    }, error => {
      console.log('fallo el call de la API getNonConformanceDocuments');
      console.log(error);
    });
  }
}
