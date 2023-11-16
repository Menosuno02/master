import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutingProvider, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceSeries } from './services/service.series';
import { MenuComponent } from './components/menu/menu.component';
import { SerieComponent } from './components/serie/serie.component';
import { PersonajesserieComponent } from './components/personajesserie/personajesserie.component';
import { CreatepersonajeComponent } from './components/createpersonaje/createpersonaje.component';
import { UpdatepersonajeComponent } from './components/updatepersonaje/updatepersonaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SerieComponent,
    PersonajesserieComponent,
    CreatepersonajeComponent,
    UpdatepersonajeComponent,
  ],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  providers: [appRoutingProvider, ServiceSeries],
  bootstrap: [AppComponent],
})
export class AppModule {}
