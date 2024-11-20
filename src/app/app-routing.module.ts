import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './Componentes/iniciosesion/iniciosesion.component';
import { HomePageComponent } from './Componentes/home-page/home-page.component';
import { PerfilUsuarioComponent } from './Componentes/perfil-usuario/perfil-usuario.component';
import { TendenciaCoquetteComponent } from './Componentes/tendencia-coquette/tendencia-coquette.component';
import { TendenciaOldMoneyComponent } from './Componentes/tendencia-old-money/tendencia-old-money.component';
import { TendenciasRockComponent } from './Componentes/tendencias-rock/tendencias-rock.component';

const routes: Routes = [
  {path: '', component: IniciosesionComponent}, 
  {path: 'homepage', component: HomePageComponent},
  {path: 'perfil_usuario', component: PerfilUsuarioComponent},
  {path: 'tCoquette', component:TendenciaCoquetteComponent},
  {path: 'tOldMoney', component: TendenciaOldMoneyComponent},
  {path: 'tRock', component:TendenciasRockComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
