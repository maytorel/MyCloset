import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './Componentes/iniciosesion/iniciosesion.component';
import {BienvenidoComponent} from './Componentes/bienvenido/bienvenido.component';
import {SearchBarComponent} from './Componentes/search-bar/search-bar.component';

const routes: Routes = [
  {path: '', component: IniciosesionComponent}, 
  {path: 'homepage', component: BienvenidoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
