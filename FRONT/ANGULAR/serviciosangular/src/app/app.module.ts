import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { FormsModule } from '@angular/forms';
import { appRoutingProvider, routing } from './app.routing';
import { MenuComponent } from './components/menu/menu.component';

import { ServiceComics } from './services/service.comic';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { ServicePersonas } from './services/service.persona';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesapiComponent } from './components/cochesapi/cochesapi.component';
import { ServiceCoches } from './services/service.coche';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    ComicComponent,
    MenuComponent,
    HomeComponent,
    PersonasapiComponent,
    CochesapiComponent,
  ],
  imports: [BrowserModule, FormsModule, routing, HttpClientModule],
  providers: [
    appRoutingProvider,
    ServiceComics,
    ServicePersonas,
    ServiceCoches,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
