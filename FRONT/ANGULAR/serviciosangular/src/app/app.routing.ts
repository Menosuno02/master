import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LibreriaComponent } from './components/libreria/libreria.component';

const routes: Routes = [{ path: 'libreria', component: LibreriaComponent }];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
