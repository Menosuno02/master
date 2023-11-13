import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css'],
})
export class CollatzComponent implements OnInit {
  public num!: number;
  public collatz: number[] = [];

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.num = params['numero'];
      let numero = this.num;
      while (numero >= 1) {
        this.collatz.push(numero);
        if (numero == 1) break;
        numero % 2 == 0 ? (numero /= 2) : (numero = numero * 3 + 1);
      }
    });
  }

  volverMenu(): void {
    this._router.navigate(['/menucollatz']);
  }
}
