import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';

import { UsersComponent } from './users/users.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employees/delete-employee/delete-employee.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdministrationComponent,

    UsersComponent,
     NewEmployeeComponent,
     EditEmployeeComponent,
     DeleteEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule
  ]
})
export class AdministrationModule { }
