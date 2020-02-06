import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetarioComponent } from './paginas/recetario/recetario.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: RecetarioComponent },
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
