import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { EmployeesModel } from '../data/models/employees.model';
import { catchError } from 'rxjs/operators';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private _http: HttpClient
  ) { }

  // Método para obtener el token almacenado en el almacenamiento local.
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  // Método para obtener la lista de empleados desde la API.
  public getEmployees(): Observable<EmployeesModel[]> {
    const headers = new HttpHeaders({
      'token': this.token
    });

    // Realiza una solicitud HTTP GET a la URL de la API para obtener la lista de empleados.
    return this._http.get<EmployeesModel[]>(`${API_URL}/employees`, { headers }).pipe(
      catchError((error: any) => {
        // Maneja errores que puedan ocurrir durante la solicitud HTTP.
        console.error('Error al obtener la lista de empleados:', error);

        // Retorna un Observable con un mensaje de error descriptivo.
        return throwError('Error al obtener la lista de empleados. Por favor, inténtelo de nuevo más tarde.');
      })
    );
  }
}
