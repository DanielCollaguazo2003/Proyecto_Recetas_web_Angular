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
    const seCargo = localStorage.getItem("seCargoRecetas") || null;
    if (!seCargo || !parseInt(seCargo)) {
      localStorage.setItem("seCargoRecetas", '1');
      this._recetaService.actualizarRecetas(this.recetasCarga);
    }
  }

  get recetas(): Receta[] {
    return this.recetasCarga;
  }

}
