import { Receta } from './../../domain/receta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioRecetasService } from 'src/app/servicio-recetas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  recetasCarga: Receta[] = this._recetaService.obtenerRecetas();

  constructor(
    private _route: ActivatedRoute,
    private _recetaService: ServicioRecetasService,
  ) { }

  ngOnInit() {
    this._recetaService.actualizarRecetas(this.recetasCarga);
  }

  get recetas(): Receta[] {
    this.recetasCarga = this._recetaService.obtenerRecetas();
    return this.recetasCarga;
  }

}
