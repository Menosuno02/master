import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';
import { HijococheComponent } from './components/hijocoche/hijocoche.component';

const routes: Routes = [
  { path: 'productos', component: ListaproductosComponent },
  {
    path: 'producto/:nombre/:imagen/:precio',
    component: DetalleproductoComponent,
  },
  {
    path: 'coche',
    component: HijococheComponent,
  },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
