import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoVehiculosComponent } from './listado-vehiculos/listado-vehiculos.component';

const routes: Routes = [
  { path: 'listado-vehiculos', component: ListadoVehiculosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
