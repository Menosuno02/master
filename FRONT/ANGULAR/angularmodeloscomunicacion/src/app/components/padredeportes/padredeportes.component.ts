import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrls: ['./padredeportes.component.css'],
})
export class PadredeportesComponent {
  public deportes!: string[];
  public favorito!: string;

  constructor() {
    this.deportes = [
      'Fútbol',
      'Balonmano',
      'Baloncesto',
      'Béisbol',
      'Tenis',
      'Dardos',
    ];
  }

  selectFav(event: any, deporte: string): void {
    console.log(event);
    this.favorito = deporte;
  }
}
