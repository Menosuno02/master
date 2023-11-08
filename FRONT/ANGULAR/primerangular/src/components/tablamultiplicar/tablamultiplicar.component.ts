import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar',
  templateUrl: './tablamultiplicar.component.html',
})
export class TablaMultiplicarComponent {
  @ViewChild('controlnumero') controlnumero!: ElementRef;
  public operaciones: string[] = [];
  public resultados: number[] = [];
  public html: string = '';

  constructor() {}

  tablaMultiplicar(): void {
    this.operaciones = [];
    this.resultados = [];
    this.html = '';
    let numero: number = parseInt(this.controlnumero.nativeElement.value);
    for (let i: number = 1; i <= 10; i++) {
      this.html += numero + ' x ' + i + ' = ' + numero * i + '<br/>';
      this.operaciones.push(numero + ' x ' + i);
      this.resultados.push(numero * i);
    }
  }
}
