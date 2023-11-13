import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css'],
})
export class NumeroDobleComponent implements OnInit {
  public numero!: number;
  public doble!: number;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['numero']) {
        this.numero = parseInt(params['numero']);
        this.doble = this.numero * 2;
      }
    });
  }

  goToHome(): void {
    this._router.navigate(['/']);
  }

  redirect(num: number): void {
    this._router.navigate(['/doble', num]);
  }
}
