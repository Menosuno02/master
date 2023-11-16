import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from '../models/Serie';
import { Personaje } from '../models/Personaje';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ServiceSeries {
  constructor(private _http: HttpClient) {}

  getSeries(): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Series';
    return this._http.get(url + request);
  }

  getSerie(idSerie: number): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Series/' + String(idSerie);
    return this._http.get(url + request);
  }

  getPersonajesSerie(idSerie: number): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Series/PersonajesSerie/' + String(idSerie);
    return this._http.get(url + request);
  }

  createPersonaje(personaje: Personaje): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Personajes';
    let json = JSON.stringify(personaje);
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(url + request, json, { headers: header });
  }

  getPersonajes(): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Personajes';
    return this._http.get(url + request);
  }

  updatePersonaje(idSerie: string, idPersonaje: string): Observable<any> {
    let url = environment.urlApi;
    let request = `api/Personajes/${idPersonaje}/${idSerie}`;
    return this._http.put(url + request, '');
  }
}
