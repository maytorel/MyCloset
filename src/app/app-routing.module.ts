import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './Componentes/iniciosesion/iniciosesion.component';
import { HomePageComponent } from './Componentes/home-page/home-page.component';
import { PerfilUsuarioComponent } from './Componentes/perfil-usuario/perfil-usuario.component';
import { TendenciaCoquetteComponent } from './Componentes/tendencia-coquette/tendencia-coquette.component';
import { TendenciaOldMoneyComponent } from './Componentes/tendencia-old-money/tendencia-old-money.component';
import { TendenciasRockComponent } from './Componentes/tendencias-rock/tendencias-rock.component';
import { Iniciarsesion2Component } from './Componentes/iniciarsesion2/iniciarsesion2.component';
import { RegistarteComponent } from './Componentes/registarte/registarte.component';
import { TopComponent } from './Componentes/top/top.component';
import { UserGlossyComponent } from './Componentes/user-glossy/user-glossy.component';
import { UserGoldComponent } from './Componentes/user-gold/user-gold.component';
import { UserMaxiComponent } from './Componentes/user-maxi/user-maxi.component';
import { BotomsComponent } from './Componentes/botoms/botoms.component';
import { VestidoComponent } from './Componentes/vestido/vestido.component';
import { ZapatoComponent } from './Componentes/zapato/zapato.component';
import { AcceComponent } from './Componentes/acce/acce.component';
import { OutfitFavComponent } from './Componentes/outfit-fav/outfit-fav.component';

const routes: Routes = [
  {path: '', component: IniciosesionComponent}, 
  {path: 'homepage', component: HomePageComponent},
  {path: 'perfil_usuario', component: PerfilUsuarioComponent},
  {path: 'tCoquette', component:TendenciaCoquetteComponent},
  {path: 'tOldMoney', component: TendenciaOldMoneyComponent},
  {path: 'tRock', component:TendenciasRockComponent},
  {path: 'inicioSesion', component:Iniciarsesion2Component},
  {path: 'registrarteSesion', component:RegistarteComponent},
  {path: 'MyClosetTops', component:TopComponent},
  {path: "perfilGlossyBaddie", component:UserGlossyComponent},
  {path: "perfilMaxiSiren927", component:UserMaxiComponent},
  {path: "perfilGoldStarXxX", component:UserGoldComponent},
  {path: "MyClosetBottoms", component:BotomsComponent},
  {path: "MyClosetVestidos", component:VestidoComponent},
  {path: "MyClosetZapatos", component:ZapatoComponent},
  {path: "MyClosetAccesorios", component:AcceComponent},
  {path: "MyClosetFavoritos", component:OutfitFavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
