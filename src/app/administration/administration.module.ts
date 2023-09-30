import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { EmployeesComponent } from './employees/employees.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AdministrationComponent,
    EmployeesComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
