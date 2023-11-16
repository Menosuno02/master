import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Departamento } from '../models/Departamento';

@Injectable()
export class ServiceDepartamentos {
  constructor(private _http: HttpClient) {}

  getDepartamentos(): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Departamentos';
    return this._http.get(url + request);
  }

  createDepartamento(dept: Departamento): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Departamentos';
    let json = JSON.stringify(dept);
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    // let header = new HttpHeaders();
    // header = header.set('Content-Type', 'application/json');
    return this._http.post(url + request, json, { headers: header });
  }

  updateDepartamento(dept: Departamento): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Departamentos';
    let json = JSON.stringify(dept);
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(url + request, json, { headers: header });
  }

  deleteDepartamento(idDept: number): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Departamentos/' + String(idDept);
    return this._http.delete(url + request);
  }
}
