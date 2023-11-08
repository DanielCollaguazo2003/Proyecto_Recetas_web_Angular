import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VistaRecetaComponent } from './pages/vista-receta/vista-receta.component';

const routes: Routes = [
  {path: "home", component: InicioComponent},
  {path: "receta/:identificador", component: VistaRecetaComponent},
  {path: "**", redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
