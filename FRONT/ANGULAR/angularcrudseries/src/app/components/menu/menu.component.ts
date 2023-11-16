import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/Serie';
import { ServiceSeries } from 'src/app/services/service.series';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public series!: Serie[];

  constructor(private _service: ServiceSeries) {}

  ngOnInit(): void {
    this._service.getSeries().subscribe((response) => {
      this.series = response;
    });
  }
}
