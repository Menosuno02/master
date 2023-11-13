import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';

const routes: Routes = [
  { path: '', component: ListaproductosComponent },
  {
    path: 'producto/:nombre/:imagen/:precio',
    component: DetalleproductoComponent,
  },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
