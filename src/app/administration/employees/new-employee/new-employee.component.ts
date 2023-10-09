import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = fb.group({
      codigo: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      fechaAlta: ['', Validators.required],
      fechaBaja: [''],
      sede: [''],
      tipoEmpleado: [''],
      status: [''],
      cargo: [''],
      departamento: [''],
      municipio: [''],
      referenciaDireccion: [''],
      cuentaBanco1: [''],
      cuentaBanco2: ['']
    });
  }
}
