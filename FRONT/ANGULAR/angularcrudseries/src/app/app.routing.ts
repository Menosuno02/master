import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { SerieComponent } from './components/serie/serie.component';
import { PersonajesserieComponent } from './components/personajesserie/personajesserie.component';
import { CreatepersonajeComponent } from './components/createpersonaje/createpersonaje.component';
import { UpdatepersonajeComponent } from './components/updatepersonaje/updatepersonaje.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'serie/:id',
    component: SerieComponent,
  },
  {
    path: 'personajes/:id',
    component: PersonajesserieComponent,
  },
  {
    path: 'create',
    component: CreatepersonajeComponent,
  },
  {
    path: 'update',
    component: UpdatepersonajeComponent,
  },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
