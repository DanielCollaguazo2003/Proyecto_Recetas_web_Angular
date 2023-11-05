import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { MenuNavComponent } from './menu/menu-nav/menu-nav.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RecetasComponentComponent } from './pages/recetas-component/recetas-component.component';
import { VistaRecetaComponent } from './pages/vista-receta/vista-receta.component';
import { FormulacioRecetasComponent } from './pages/formulacio-recetas/formulacio-recetas.component';
import { ContactanosComponent } from './pages/sobreNosotros/contactanos.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuNavComponent,
    InicioComponent,
    RecetasComponentComponent,
    VistaRecetaComponent,
    FormulacioRecetasComponent,
    ContactanosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
