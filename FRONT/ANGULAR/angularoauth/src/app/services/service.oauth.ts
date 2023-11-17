import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ServiceOAuth {
  constructor(private _http: HttpClient) {}

  getAuthToken(userName: string, password: string): Observable<any> {
    let user = {
      userName: userName,
      password: password,
    };
    let json = JSON.stringify(user);
    let url = environment.urlApi;
    let request = 'Auth/Login';
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(url + request, json, { headers: header });
  }

  getEmpleados(token: string): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Empleados';
    let header = new HttpHeaders({ Authorization: 'bearer ' + token });
    return this._http.get(url + request, { headers: header });
  }
}
