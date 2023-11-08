import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RecetasComponentComponent } from './components/recetas-component/recetas-component.component';
import { VistaRecetaComponent } from './pages/vista-receta/vista-receta.component';
import { FormulacioRecetasComponent } from './components/formulario/formulario.component';
import { ContactanosComponent } from './components/sobre-nosotros/contactanos.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CartaRecetaComponent } from './components/carta-receta/carta-receta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioRecetasService } from './servicio-recetas.service';

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
    FooterComponent,
    CarruselComponent,
    CartaRecetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ServicioRecetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }


