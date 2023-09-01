import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CorpoComponent } from './corpo/corpo.component';
import { CriarNotaComponent } from './criar-nota/criar-nota.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CorpoComponent,
    CriarNotaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
