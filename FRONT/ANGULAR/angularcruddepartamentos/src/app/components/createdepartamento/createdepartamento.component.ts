import { Component, ElementRef, ViewChild } from '@angular/core';
import { Departamento } from 'src/app/models/Departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';

import { Router } from '@angular/router';

@Component({
  selector: 'app-createdepartamento',
  templateUrl: './createdepartamento.component.html',
  styleUrls: ['./createdepartamento.component.css'],
})
export class CreatedepartamentoComponent {
  @ViewChild('controlid') controlId: ElementRef = new ElementRef(0);
  @ViewChild('controlnombre') controlNombre: ElementRef = new ElementRef('');
  @ViewChild('controllocalidad') controlLoc: ElementRef = new ElementRef('');

  constructor(
    private _service: ServiceDepartamentos,
    private _router: Router
  ) {}

  createDepartamento(): void {
    let dept: Departamento = new Departamento(
      parseInt(this.controlId.nativeElement.value),
      this.controlNombre.nativeElement.value,
      this.controlLoc.nativeElement.value
    );
    this._service.createDepartamento(dept).subscribe((response) => {
      console.log(response);
      this._router.navigate(['/']);
    });
  }
}
