import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrls: ['./hijodeporte.component.css'],
})
export class HijodeporteComponent {
  @Input() deporte!: string;
  @Output() selectFavPadre = new EventEmitter();

  selectFavHijo(event: any): void {
    this.selectFavPadre.emit(this.deporte);
  }
}
