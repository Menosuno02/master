import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Personaje } from 'src/app/models/Personaje';
import { Serie } from 'src/app/models/Serie';
import { ServiceSeries } from 'src/app/services/service.series';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpersonaje',
  templateUrl: './createpersonaje.component.html',
  styleUrls: ['./createpersonaje.component.css'],
})
export class CreatepersonajeComponent implements OnInit {
  public series!: Serie[];

  @ViewChild('controlnombre') controlNombre: ElementRef = new ElementRef('');
  @ViewChild('controlimagen') controlImagen: ElementRef = new ElementRef('');
  @ViewChild('selectserie') selectSerie!: ElementRef;

  constructor(private _service: ServiceSeries, private _router: Router) {}

  ngOnInit(): void {
    this._service.getSeries().subscribe((response) => {
      this.series = response;
      this.selectSerie.nativeElement.value = this.series[0].idSerie;
    });
  }

  createPersonaje(): void {
    let personaje: Personaje = new Personaje(
      0,
      this.controlNombre.nativeElement.value,
      this.controlImagen.nativeElement.value,
      parseInt(this.selectSerie.nativeElement.value)
    );
    this._service.createPersonaje(personaje).subscribe((response) => {
      this._router.navigate([
        '/personajes',
        this.selectSerie.nativeElement.value,
      ]);
    });
  }
}
