import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Personaje } from 'src/app/models/Personaje';
import { Serie } from 'src/app/models/Serie';
import { ServiceSeries } from 'src/app/services/service.series';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatepersonaje',
  templateUrl: './updatepersonaje.component.html',
  styleUrls: ['./updatepersonaje.component.css'],
})
export class UpdatepersonajeComponent implements OnInit {
  public series!: Serie[];
  public personajes!: Personaje[];
  public serie!: Serie;
  public personaje!: Personaje;

  @ViewChild('selectserie') selectSerie!: ElementRef;
  @ViewChild('selectpersonaje') selectPersonaje!: ElementRef;

  constructor(private _service: ServiceSeries, private _router: Router) {}

  ngOnInit(): void {
    this._service.getSeries().subscribe((response) => {
      this.series = response;
    });
    this._service.getPersonajes().subscribe((response) => {
      this.personajes = response;
    });
  }

  modificarPersonaje(): void {
    let serie = parseInt(this.selectSerie.nativeElement.value);
    let personaje = parseInt(this.selectPersonaje.nativeElement.value);
    this._service.updatePersonaje(serie, personaje).subscribe((response) => {
      this._router.navigate(['/personajes', serie]);
    });
  }

  dataSerie(): void {
    let serie = parseInt(this.selectSerie.nativeElement.value);
    this._service.getSerie(serie).subscribe((response) => {
      this.serie = response;
    });
  }

  dataPersonaje(): void {
    let personaje = parseInt(this.selectPersonaje.nativeElement.value);
    this._service.getPersonaje(personaje).subscribe((response) => {
      this.personaje = response;
    });
  }
}
