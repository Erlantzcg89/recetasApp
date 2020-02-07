import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetarioComponent } from './paginas/recetario/recetario.component';
import { RecetaDetalleComponent } from './paginas/receta-detalle/receta-detalle.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: RecetarioComponent },
  { path: 'receta-detalle/:idReceta', component: RecetaDetalleComponent },
  { path: '**', redirectTo: "/inicio" }

];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
