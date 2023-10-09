import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employees/delete-employee/delete-employee.component';


const routes: Routes = [
 {
  path: "administracion", 
  component: AdministrationComponent,
children:[
  {path: 'AgregarNuevoEmpleado', component: NewEmployeeComponent},
  {path: 'EditarEmpleado', component: EditEmployeeComponent},
  {path: 'EliminarEmpleado', component: DeleteEmployeeComponent}
] }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
