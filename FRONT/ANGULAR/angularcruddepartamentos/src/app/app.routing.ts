import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CreatedepartamentoComponent } from './components/createdepartamento/createdepartamento.component';
import { UpdatedepartamentoComponent } from './components/updatedepartamento/updatedepartamento.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreatedepartamentoComponent,
  },
  {
    path: 'update/:id/:nombre/:localidad',
    component: UpdatedepartamentoComponent,
  },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
