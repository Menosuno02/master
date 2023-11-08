import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PrimerComponent } from 'src/components/primercomponent/primer.component';
import { HooksAngular } from 'src/components/hooksangular/hooksangular.component';
import { DeportesComponent } from 'src/components/deportescomponent/deportes.component';
import { FormsBindingComponent } from 'src/components/formsbinding/formsbinding.component';
import { SumarNumerosComponent } from 'src/components/sumarnumeros/sumarnumeros.component';
import { TablaMultiplicarComponent } from 'src/components/tablamultiplicar/tablamultiplicar.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    TablaMultiplicarComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
