import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MainService } from 'src/app/servicios/main.service';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  auditDocument: any;

  constructor(private mainService: MainService) {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.getAuditDocuments();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAuditDocuments() {
    this.mainService.getAuditDocuments().subscribe( data => {
      this.auditDocument = data;
      this.dataSource = new MatTableDataSource(data);
      console.log('call 1');
      console.log(this.auditDocument);
    }, error => {
      console.log('fallo el call de la API2');
      console.log(error);
    });
  }
}

function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
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