import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
