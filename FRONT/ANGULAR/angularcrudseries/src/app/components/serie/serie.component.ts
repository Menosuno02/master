import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/Serie';
import { ServiceSeries } from 'src/app/services/service.series';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent implements OnInit {
  public serie?: Serie;

  constructor(
    private _service: ServiceSeries,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.serie = undefined; // para que salga loading
        this._service.getSerie(params['id']).subscribe((response) => {
          this.serie = response;
        });
      }
    });
  }
}
