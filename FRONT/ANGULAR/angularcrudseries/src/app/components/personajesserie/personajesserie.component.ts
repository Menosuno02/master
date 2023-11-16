import { Component, OnInit } from '@angular/core';
import { ServiceSeries } from 'src/app/services/service.series';
import { ActivatedRoute, Params } from '@angular/router';
import { Personaje } from 'src/app/models/Personaje';

@Component({
  selector: 'app-personajesserie',
  templateUrl: './personajesserie.component.html',
  styleUrls: ['./personajesserie.component.css'],
})
export class PersonajesserieComponent implements OnInit {
  public idSerie!: number;
  public personajes?: Personaje[];

  constructor(
    private _service: ServiceSeries,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.idSerie = params['id'];
        this.personajes = undefined; // para que salga loading
        this._service.getPersonajesSerie(this.idSerie).subscribe((response) => {
          this.personajes = response;
        });
      }
    });
  }
}
