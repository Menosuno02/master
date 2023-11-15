import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { ServiceEmpleados } from 'src/app/services/service.empleado';

@Component({
  selector: 'app-empleadosfuncion',
  templateUrl: './empleadosfuncion.component.html',
  styleUrls: ['./empleadosfuncion.component.css'],
})
export class EmpleadosfuncionComponent implements OnInit {
  public funciones: string[] = [];
  public empleados: Empleado[] = [];

  @ViewChild('selectfuncion') selectFuncion: ElementRef = new ElementRef('');

  constructor(private _service: ServiceEmpleados) {}

  ngOnInit(): void {
    this._service.getFunciones().subscribe((response) => {
      this.funciones = response;
    });
  }

  changeEmpleados(): void {
    let funcion = this.selectFuncion.nativeElement.value;
    this._service.getEmpleadosFuncion(funcion).subscribe((response) => {
      this.empleados = response;
    });
  }
}
