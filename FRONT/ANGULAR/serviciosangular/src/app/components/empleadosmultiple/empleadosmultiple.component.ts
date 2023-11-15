import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { ServiceEmpleados } from 'src/app/services/service.empleado';

@Component({
  selector: 'app-empleadosmultiple',
  templateUrl: './empleadosmultiple.component.html',
  styleUrls: ['./empleadosmultiple.component.css'],
})
export class EmpleadosmultipleComponent implements OnInit {
  public funciones: string[] = [];
  public empleados: Empleado[] = [];

  @ViewChild('selectfuncion') selectFuncion: ElementRef = new ElementRef([]);

  constructor(private _service: ServiceEmpleados) {}

  ngOnInit(): void {
    this._service.getFunciones().subscribe((response) => {
      this.funciones = response;
    });
  }

  changeFuncion(): void {
    let selected = [];
    for (let opcion of this.selectFuncion.nativeElement.selectedOptions)
      selected.push(opcion.value);
    this._service.getEmpleadosMultiple(selected).subscribe((response) => {
      this.empleados = response;
    });
  }
}
