import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import { Departamento } from 'src/app/models/Departamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public departamentos: Departamento[] = [];

  constructor(private _service: ServiceDepartamentos) {}

  ngOnInit(): void {
    this._service.getDepartamentos().subscribe((response) => {
      this.departamentos = response;
    });
  }
}
