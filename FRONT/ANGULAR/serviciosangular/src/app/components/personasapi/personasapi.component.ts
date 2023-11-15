import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { ServicePersonas } from 'src/app/services/service.persona';

@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrls: ['./personasapi.component.css'],
})
export class PersonasapiComponent implements OnInit {
  public personas!: Persona[];

  constructor(private _service: ServicePersonas) {}

  ngOnInit(): void {
    /*
    this._service.getPersonas().subscribe((response) => {
      this.personas = response;
    });
    */
    this._service.getPersonasPromesa().then((result) => {
      this.personas = result;
    });
  }
}
