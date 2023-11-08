import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/domain/receta';
import { ActivatedRoute } from '@angular/router';
import { ServicioRecetasService } from 'src/app/servicio-recetas.service';

@Component({
  selector: 'app-vista-receta',
  templateUrl: './vista-receta.component.html',
  styleUrls: ['./vista-receta.component.css']
})
export class VistaRecetaComponent implements OnInit {
  //@Input() receta?: Receta;
  receta?: Receta | null;

  constructor(
    private _route: ActivatedRoute,
    private _recetaService: ServicioRecetasService,
  ){ }

  ngOnInit(){
    const identificador = parseInt(this._route.snapshot.paramMap.get('identificador') || '0');
    this.receta = this._recetaService.obtenerReceta(identificador)
  }



}
