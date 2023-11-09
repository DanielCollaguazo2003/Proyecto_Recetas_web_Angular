import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/domain/receta';
import { ServicioRecetasService } from 'src/app/servicio-recetas.service';

@Component({
  selector: 'app-recetas-component',
  templateUrl: './recetas-component.component.html',
  styleUrls: ['./recetas-component.component.css']
})
export class RecetasComponentComponent {

  recetas: Receta[] = [];
  constructor(_servicioRecetas:ServicioRecetasService) {
    this.recetas = _servicioRecetas.obtenerRecetasPorNombre('');
  }
}
