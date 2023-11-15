import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
import { ServiceComics } from 'src/app/services/service.comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
})
export class LibreriaComponent implements OnInit {
  public comics!: Comic[];
  public favorito?: Comic;

  @ViewChild('controltitulo') controlTitulo!: ElementRef;
  @ViewChild('controlimg') controlImg!: ElementRef;
  @ViewChild('controldesc') controlDesc!: ElementRef;

  constructor(private _service: ServiceComics) {}

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

  insertarComic(): void {
    this.comics.push(
      new Comic(
        this.controlTitulo.nativeElement.value,
        this.controlImg.nativeElement.value,
        this.controlDesc.nativeElement.value
      )
    );
  }

  modificarComic(event: Comic): void {
    let newComic = new Comic(
      this.controlTitulo.nativeElement.value || event.titulo,
      this.controlImg.nativeElement.value || event.imagen,
      this.controlDesc.nativeElement.value || event.descripcion
    );
    if (this.favorito?.titulo === event.titulo) this.favorito = newComic;
    this.comics = this.comics.map((comic) =>
      comic.titulo === event.titulo ? newComic : comic
    );
  }

  /*
  modificarComicIndex(event: number): void {
    let comic = new Comic(
      this.controlTitulo.nativeElement.value || this.comics[event].titulo,
      this.controlImg.nativeElement.value || this.comics[event].imagen,
      this.controlDesc.nativeElement.value ||
        this.comics[event].descripcion
    );
    this.comics[event] = comic;
  }
  */

  eliminarComic(event: Comic): void {
    console.log(event);
    this.comics = this.comics.filter((comic) => comic.titulo !== event.titulo);
    if (this.favorito?.titulo === event.titulo) this.favorito = undefined;
  }

  /*
  eliminarComicIndex(event: number): void {
    this.comics.splice(event, 1);
  }
  */

  selectFav(event: Comic): void {
    console.log(event);
    this.favorito = event;
  }
}
