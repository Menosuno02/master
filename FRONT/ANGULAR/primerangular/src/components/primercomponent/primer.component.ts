import { Component } from '@angular/core';

@Component({
  selector: 'primer-component', //nombre component, separar con guiones
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css'],
})
export class PrimerComponent {
  public titulo: string;
  public descripcion: string;
  public anyo: number = 0;

  constructor() {
    this.titulo = 'Es miércoles';
    this.descripcion = 'Aprendiendo Angular';
    this.anyo = 2023;
  }
}
