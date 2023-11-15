import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/Coche';
import { ServiceCoches } from 'src/app/services/service.coche';

@Component({
  selector: 'app-cochesapi',
  templateUrl: './cochesapi.component.html',
  styleUrls: ['./cochesapi.component.css'],
})
export class CochesapiComponent implements OnInit {
  public coches!: Coche[];

  constructor(private _service: ServiceCoches) {}

  ngOnInit(): void {
    this._service.getCoches().subscribe((response) => {
      this.coches = response;
    });
  }
}
