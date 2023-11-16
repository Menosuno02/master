import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ServiceDepartamentos {
  constructor(private _http: HttpClient) {}

  getDepartamentos(): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Departamentos';
    return this._http.get(url + request);
  }
}
