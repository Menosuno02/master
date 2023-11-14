import { Component } from '@angular/core';
import { Coche } from 'src/app/models/Coche';

@Component({
  selector: 'app-padrecoches',
  templateUrl: './padrecoches.component.html',
  styleUrls: ['./padrecoches.component.css'],
})
export class PadrecochesComponent {
  public coches!: Coche[];

  constructor() {
    this.coches = [
      new Coche('Ford', 'Mustang', 260, 30, false),
      new Coche('Ferrari', 'LaFerrari', 400, 40, false),
      new Coche('Bugatti', 'Veyron', 450, 35, false),
    ];
  }
}
