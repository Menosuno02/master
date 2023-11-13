import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';
import { CineComponent } from './components/cine/cine.component';
import { Error404Component } from './components/error404/error404.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'cine', component: CineComponent },
  { path: '**', component: Error404Component }, // DOS ASTERISCOS
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
