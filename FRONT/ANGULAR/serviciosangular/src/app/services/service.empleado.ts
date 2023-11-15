import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ServiceEmpleados {
  constructor(private _http: HttpClient) {}

  getFunciones(): Observable<any> {
    let url = environment.urlApiEmpleados;
    let request = 'api/Plantilla/Funciones';
    return this._http.get(url + request);
  }

  getEmpleadosFuncion(funcion: string): Observable<any> {
    let url = environment.urlApiEmpleados;
    let request = 'api/Plantilla/PlantillaFuncion/' + funcion;
    return this._http.get(url + request);
  }
}
