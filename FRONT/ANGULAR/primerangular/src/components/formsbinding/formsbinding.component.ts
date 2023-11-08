import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-binding',
  templateUrl: './formsbinding.component.html',
})
export class FormsBindingComponent {
  public user: any;
  public mensaje: string = '';

  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      edad: 0,
    };
  }

  recibirDatos(): void {
    this.mensaje = 'Datos recibidos';
  }
}
