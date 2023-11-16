import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutingProvider, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceDepartamentos } from './services/service.departamentos';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  providers: [appRoutingProvider, ServiceDepartamentos],
  bootstrap: [AppComponent],
})
export class AppModule {}
