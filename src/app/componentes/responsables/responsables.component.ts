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

const ELEMENTOS = [
  {auditNumber: "U.Op. Depositos de terceros - Ene 2010", estadoActual: "En proceso", number: 2, author: "Fabian Lamas", creationStamp: "2010-016:49:28", answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec" },
  {auditNumber: "Auditoria de Seguimeinto ISO 9001", estadoActual: "En proceso", number: 4, author: "Fabian Lamas", creationStamp: "2010-01-0:22", answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "Auditoria de Seguimeinto ISO 9001", estadoActual: "En proceso", number: 5, author: "Fabian Lamas", creationStamp: "2010-01-25T08:42:18", answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "Auditoria de Seguimeinto ISO 9001", estadoActual: "En proceso", number: 6, author: "Fabian Lamas", creationStamp: "2010-01-25T08:49:46",  answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "09/2010", estadoActual: "En proceso", number: 199, author: "Fabian Lamas", creationStamp: "2010-06-16T14:59:39",  answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "06/2012 - Mantenimiento", estadoActual: "En proceso", number: 812, author: "Fabian Lamas", creationStamp: "2012-06-27T12:18:58", answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "17/2012 - Inocuidad y Calidad Alcorta", estadoActual: "En proceso", number: 942, author: "Fabian Lamas", creationStamp: "2012-11-16T11:05:27",  answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "AI 190 (Control de línea y Materias Primas)", estadoActual: "En proceso", number: 152, author: "Fabian Lamas", creationStamp: "2010-05-10T15:03:01",  answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "Q1 2010", estadoActual: "En proceso", number: 310, author: "Fabian Lamas", creationStamp: "2010-09-02T16:37:06",  answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "06/2010", estadoActual: "En proceso", number: 179, author: "Fabian Lamas", creationStamp: "2010-05-27T10:20:27",  answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "U.Op. Depositos de terceros - Ene 2010", estadoActual: "En proceso", number: 2, author: "Fabian Lamas", creationStamp: "2010-016:49:28", answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec" },
  {auditNumber: "Auditoria de Seguimeinto ISO 9001", estadoActual: "En proceso", number: 4, author: "Fabian Lamas", creationStamp: "2010-01-0:22", answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "Auditoria de Seguimeinto ISO 9001", estadoActual: "En proceso", number: 5, author: "Fabian Lamas", creationStamp: "2010-01-25T08:42:18", answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "Auditoria de Seguimeinto ISO 9001", estadoActual: "En proceso", number: 6, author: "Fabian Lamas", creationStamp: "2010-01-25T08:49:46",  answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "09/2010", estadoActual: "En proceso", number: 199, author: "Fabian Lamas", creationStamp: "2010-06-16T14:59:39",  answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "06/2012 - Mantenimiento", estadoActual: "En proceso", number: 812, author: "Fabian Lamas", creationStamp: "2012-06-27T12:18:58", answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "17/2012 - Inocuidad y Calidad Alcorta", estadoActual: "En proceso", number: 942, author: "Fabian Lamas", creationStamp: "2012-11-16T11:05:27",  answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "AI 190 (Control de línea y Materias Primas)", estadoActual: "En proceso", number: 152, author: "Fabian Lamas", creationStamp: "2010-05-10T15:03:01",  answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "Q1 2010", estadoActual: "En proceso", number: 310, author: "Fabian Lamas", creationStamp: "2010-09-02T16:37:06",  answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"},
  {auditNumber: "06/2010", estadoActual: "En proceso", number: 179, author: "Fabian Lamas", creationStamp: "2010-05-27T10:20:27",  answerType: "_Corrective_Text", dias: 5, origenPlanMejora: "Reclamos clientes", responsible: "AR00022750", sabor: "Naranja", sector: "1e75f2f7-501f-4b9e-a8ba-8ebf4abbf061", size: "   ", topic: "2204d9d7-1bc6-4a5b-b19d-3e47915970ec"}
];



@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {

  displayedColumns: string[] = [ 'auditNumber', 'estadoActual', 'number', 'author', 'creationStamp', 'answerType', 'dias',
                                  'origenPlanMejora', 'responsible', 'sabor', 'sector', 'size', 'topic'];
  // displayedColumns: string[] = ['auditNumber', 'estadoActual', 'number', 'author',
  //                               'creationStamp', 'dias', 'sector', 'origenPlanMejora',
  //                               'topic', 'sabor', 'size', 'responsible', 'answerType',
  //                               ];
  //dataSource: MatTableDataSource<any>;
  dataSource: MatTableDataSource<any>;

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
    console.log("la lista de responsables log");
    console.log(this.listaResponsables);
    this.dataSource = new MatTableDataSource(this.listaResponsables);
    // this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    //  setTimeout(() => this.dataSource.paginator = this.paginator);
    //  setTimeout(() => this.dataSource.sort = this.sort);
    //  this.dataSource = new MatTableDataSource(ELEMENTOS);
    // //console.log(this.dataSource);
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


