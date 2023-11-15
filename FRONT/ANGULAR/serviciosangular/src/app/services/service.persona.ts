import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Global from '../Global';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ServicePersonas {
  constructor(private _http: HttpClient) {}

  getPersonasPromesa(): Promise<any> {
    let url = environment.urlApiPersonas;
    let request = 'api/personas';
    let promise = new Promise((resolve) =>
      this._http.get(url + request).subscribe((response) => {
        resolve(response);
      })
    );
    return promise;
  }

  getPersonas(): Observable<any> {
    let url = environment.urlApiPersonas;
    let request = 'api/personas';
    // 1) return new Promise(function(resolve){});
    // 2) return this._http...;
    return this._http.get(url + request);
  }
}
