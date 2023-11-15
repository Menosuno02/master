import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ServiceCoches {
  constructor(private _http: HttpClient) {}

  getCoches(): Observable<any> {
    let url = environment.urlApiCoches;
    let request = 'webresources/coches';
    return this._http.get(url + request);
  }
}
