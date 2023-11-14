import { Component } from '@angular/core';
import { Coche } from 'src/app/models/Coche';

@Component({
  selector: 'app-hijocoche',
  templateUrl: './hijocoche.component.html',
  styleUrls: ['./hijocoche.component.css'],
})
export class HijococheComponent {
  public coche!: Coche;
  public mensaje!: string;

  constructor() {
    this.coche = new Coche('Pontiac', 'Firebird', 250, 20, false);
  }

  comprobarEstado(): boolean {
    if (this.coche.estado) {
      this.mensaje = 'Coche encendido';
      return true;
    } else {
      this.mensaje = 'Coche apagado';
      this.coche.velocidad = 0;
      return false;
    }
  }

  cambiarEstado(): void {
    this.coche.estado = !this.coche.estado;
    this.comprobarEstado();
  }

  acelearCoche() {
    if (!this.comprobarEstado()) alert('El coche está apagado');
    else this.coche.velocidad += this.coche.aceleracion;
  }
}
