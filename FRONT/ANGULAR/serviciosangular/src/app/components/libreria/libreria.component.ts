import { Component, ElementRef, ViewChild } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
})
export class LibreriaComponent {
  public comics!: Comic[];
  public favorito?: Comic;

  @ViewChild('controltitulo') controlTitulo!: ElementRef;
  @ViewChild('controlimg') controlImg!: ElementRef;
  @ViewChild('controldesc') controlDesc!: ElementRef;

  constructor() {
    this.comics = [
      new Comic(
        'Spiderman',
        'https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg',
        'Hombre araña'
      ),
      new Comic(
        'Wolverine',
        'https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg',
        'Lobezno'
      ),
      new Comic(
        'Guardianes de la Galaxia',
        'https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg',
        'Yo soy Groot'
      ),
      new Comic(
        'Avengers',
        'https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg',
        'Los Vengadores'
      ),
      new Comic(
        'Spawn',
        'https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png',
        'Todd MacFarlane'
      ),
    ];
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
