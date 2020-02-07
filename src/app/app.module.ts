import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetarioComponent } from './paginas/recetario/recetario.component';
import { RecetasPipe } from './pipes/recetas.pipe';
import { Error404Component } from './paginas/error404/error404.component';
import { RecetaDetalleComponent } from './paginas/receta-detalle/receta-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetarioComponent,
    RecetasPipe,
    Error404Component,
    RecetaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
