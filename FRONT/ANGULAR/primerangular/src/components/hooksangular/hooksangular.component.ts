import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'hooks-angular',
  templateUrl: './hooksangular.component.html',
})
export class HooksAngular {
  public mensaje: string = '';

  constructor() {
    console.log('Ejecutando Constructor');
    this.mensaje = 'Hooks de Angular';
  }

  ngOnInit(): void {
    console.log('Ejecutando ngOnInit');
  }

  ngDoCheck(): void {
    console.log('Ejecutando ngDoCheck');
  }

  cambiarMensaje(): void {
    this.mensaje = 'Mensaje cambiado';
  }
}
