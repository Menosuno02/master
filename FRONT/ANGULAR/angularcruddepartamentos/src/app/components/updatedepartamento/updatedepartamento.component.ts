import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from 'src/app/models/Departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatedepartamento',
  templateUrl: './updatedepartamento.component.html',
  styleUrls: ['./updatedepartamento.component.css'],
})
export class UpdatedepartamentoComponent implements OnInit {
  public departamento!: Departamento;

  @ViewChild('controlnombre') controlNombre: ElementRef = new ElementRef('');
  @ViewChild('controllocalidad') controlLoc: ElementRef = new ElementRef('');

  constructor(
    private _activeRoute: ActivatedRoute,
    private _service: ServiceDepartamentos,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.departamento = new Departamento(
          parseInt(params['id']),
          params['nombre'],
          params['localidad']
        );
      }
    });
  }

  updateDepartamento(): void {
    let dept = new Departamento(
      this.departamento.idDepartamento,
      this.controlNombre.nativeElement.value,
      this.controlLoc.nativeElement.value
    );
    this._service.updateDepartamento(dept).subscribe((response) => {
      this._router.navigate(['/']);
    });
  }
}
