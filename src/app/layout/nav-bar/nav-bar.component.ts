import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServicioRecetasService } from '../../servicio-recetas.service';
import { Receta } from '../../domain/receta';
import { debounce, debounceTime } from 'rxjs';
import { ServicioRecetasEncontradasService } from 'src/app/service/servicio-recetas-encontradas.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  control = new FormControl;
  public src: string = '';
  public data$: any;
  public receta?: Receta | null;
  public recetaEncontrada: Receta = {
    identificador: 0
  };
  ngOnInit(): void {
    this.observarIngreso();
  }

  constructor(private _servicioRecetas: ServicioRecetasService, private _servicioRecetasEncontradas: ServicioRecetasEncontradasService,){

  }
  observarIngreso(){
    this.control.valueChanges.subscribe(query => {
      console.log(query);
    });
  }

  buscar(value: string): any {
    this._servicioRecetas.obtenerRecetasPorNombre(value);
  }
}
