import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sumar-numeros',
  templateUrl: './sumarnumeros.component.html',
})
export class SumarNumerosComponent {
  @ViewChild('controlnumero1') controlnumero1!: ElementRef;
  @ViewChild('controlnumero2') controlnumero2!: ElementRef;
  public suma!: number;

  constructor() {}

  sumarNumeros(): number {
    this.suma =
      parseInt(this.controlnumero1.nativeElement.value) +
      parseInt(this.controlnumero2.nativeElement.value);
    return this.suma;
  }
}
