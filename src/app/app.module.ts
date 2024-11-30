import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import { FavoritosComponent } from './Componentes/favoritos/favoritos.component';
import { TendenciasComponent } from './Componentes/tendencias/tendencias.component';
import { OtrosUsuariosComponent } from './Componentes/otros-usuarios/otros-usuarios.component';
import { SearchBarComponent } from './Componentes/search-bar/search-bar.component';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { IniciosesionComponent } from './Componentes/iniciosesion/iniciosesion.component';
import { HomePageComponent } from './Componentes/home-page/home-page.component';
import { PerfilUsuarioComponent } from './Componentes/perfil-usuario/perfil-usuario.component';
import { TendenciaCoquetteComponent } from './Componentes/tendencia-coquette/tendencia-coquette.component';
import { TendenciaOldMoneyComponent } from './Componentes/tendencia-old-money/tendencia-old-money.component';
import { TendenciasRockComponent } from './Componentes/tendencias-rock/tendencias-rock.component';
import { Iniciarsesion2Component } from './Componentes/iniciarsesion2/iniciarsesion2.component';
import { RegistarteComponent } from './Componentes/registarte/registarte.component';
import { TopComponent } from './Componentes/top/top.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerfilComponent,
    FavoritosComponent,
    TendenciasComponent,
    OtrosUsuariosComponent,
    SearchBarComponent,
    BienvenidoComponent,
    FooterComponent,
    IniciosesionComponent,
    HomePageComponent,
    PerfilUsuarioComponent,
    TendenciaCoquetteComponent,
    TendenciaOldMoneyComponent,
    TendenciasRockComponent,
    Iniciarsesion2Component,
    RegistarteComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
