import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { LibreriaComponent } from './components/libreria/libreria.component';

const routes: Routes = [
  { path: 'productos', component: ListaproductosComponent },
  {
    path: 'producto/:nombre/:imagen/:precio',
    component: DetalleproductoComponent,
  },
  {
    path: 'coches',
    component: PadrecochesComponent,
  },
  {
    path: 'deportes',
    component: PadredeportesComponent,
  },
  {
    path: 'libreria',
    component: LibreriaComponent,
  },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
