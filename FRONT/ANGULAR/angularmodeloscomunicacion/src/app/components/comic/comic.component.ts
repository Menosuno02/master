import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Output() modificarComicPadre = new EventEmitter();
  @Output() eliminarComicPadre = new EventEmitter();
  @Output() selectFavPadre = new EventEmitter();

  modificarComicHijo(event: any) {
    this.modificarComicPadre.emit(this.comic);
  }

  eliminarComicHijo(event: any) {
    this.eliminarComicPadre.emit(this.comic);
  }

  selectFavHijo(event: any) {
    this.selectFavPadre.emit(this.comic);
  }
}
