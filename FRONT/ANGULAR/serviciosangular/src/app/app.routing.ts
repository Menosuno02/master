import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { HomeComponent } from './components/home/home.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesapiComponent } from './components/cochesapi/cochesapi.component';
import { EmpleadosfuncionComponent } from './components/empleadosfuncion/empleadosfuncion.component';
import { EmpleadosmultipleComponent } from './components/empleadosmultiple/empleadosmultiple.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libreria', component: LibreriaComponent },
  { path: 'personas', component: PersonasapiComponent },
  { path: 'coches', component: CochesapiComponent },
  { path: 'empleados', component: EmpleadosfuncionComponent },
  {
    path: 'empleadosmult',
    component: EmpleadosmultipleComponent,
  },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
