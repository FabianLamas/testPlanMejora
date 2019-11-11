import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ResponsablesComponent } from './componentes/responsables/responsables.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'responsables', component: ResponsablesComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
