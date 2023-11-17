import { Component, ElementRef } from '@angular/core';
import { ServiceOAuth } from 'src/app/services/service.oauth';
import { ViewChild } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public token!: string;
  public empleados!: Empleado[];

  @ViewChild('controluser') controlUser!: ElementRef;
  @ViewChild('controlpassword') controlPassword!: ElementRef;

  constructor(private _service: ServiceOAuth) {}

  autenticacion() {
    let userName: string = this.controlUser.nativeElement.value;
    let password: string = this.controlPassword.nativeElement.value;
    this._service.getAuthToken(userName, password).subscribe((response) => {
      this.token = response.response;
      this._service.getEmpleados(this.token).subscribe((response) => {
        this.empleados = response;
      });
    });
  }
}
