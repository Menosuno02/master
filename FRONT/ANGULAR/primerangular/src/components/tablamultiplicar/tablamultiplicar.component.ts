import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar',
  templateUrl: './tablamultiplicar.component.html',
})
export class TablaMultiplicarComponent {
  @ViewChild('controlnumero') controlnumero!: ElementRef;
  public resultados: number[] = [];
  public html: string = '';
  public numero: number = 0;

  constructor() {}

  tablaMultiplicar(): void {
    this.resultados = [];
    this.html = '';
    this.numero = parseInt(this.controlnumero.nativeElement.value);
    for (let i: number = 1; i <= 10; i++) {
      this.html += this.numero + ' x ' + i + ' = ' + this.numero * i + '<br/>';
      this.resultados.push(this.numero * i);
    }
  }
}
