import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';
import { appRoutingProvider, routing } from './app.routing';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { HijococheComponent } from './components/hijocoche/hijocoche.component';
import { MenuComponent } from './components/menu/menu.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { HijodeporteComponent } from './components/hijodeporte/hijodeporte.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    DetalleproductoComponent,
    PadrecochesComponent,
    HijococheComponent,
    MenuComponent,
    PadredeportesComponent,
    HijodeporteComponent,
    LibreriaComponent,
    ComicComponent,
  ],
  imports: [BrowserModule, routing, FormsModule],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
