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

  @ViewChild('selectserie') selectSerie!: ElementRef;
  @ViewChild('selectpersonaje') selectPersonaje!: ElementRef;

  constructor(private _service: ServiceSeries, private _router: Router) {}

  ngOnInit(): void {
    this._service.getSeries().subscribe((response) => {
      this.series = response;
      this.selectSerie.nativeElement.value = this.series[0].idSerie;
    });
    this._service.getPersonajes().subscribe((response) => {
      this.personajes = response;
      this.selectPersonaje.nativeElement.value = this.personajes[0].idPersonaje;
    });
  }

  modificarPersonaje(): void {
    let serie = this.selectSerie.nativeElement.value;
    let personaje = this.selectPersonaje.nativeElement.value;
    this._service.updatePersonaje(serie, personaje).subscribe((response) => {
      this._router.navigate(['/personajes', serie]);
    });
  }
}
