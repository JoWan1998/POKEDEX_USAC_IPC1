import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//RUTAS PAGINA
import { PagesRoutingModule } from './pages/pages/pages-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
