import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css'],
})
export class DetalleproductoComponent implements OnInit {
  public producto!: Producto;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.producto = new Producto(
        params['nombre'],
        params['imagen'],
        parseInt(params['precio'])
      );
    });
  }

  volverLista(): void {
    this._router.navigate(['/']);
  }
}
