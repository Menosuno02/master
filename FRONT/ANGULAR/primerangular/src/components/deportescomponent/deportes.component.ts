import { Component } from '@angular/core';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css'],
})
export class DeportesComponent {
  public sports: Array<string> = [];
  public numeros: Array<number> = [];

  constructor() {
    this.sports = [
      'Fútbol',
      'Baloncesto',
      'Balonmano',
      'Tenis',
      'Beísbol',
      'Curling',
    ];
    this.numeros = [124, 23, 9, 12638, 735, 4, 98, 71];
  }
}
