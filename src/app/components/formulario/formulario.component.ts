import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Receta } from 'src/app/domain/receta';
import { ServicioRecetasService } from 'src/app/servicio-recetas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormulacioRecetasComponent implements OnInit{
  receta?: Receta | null;

  form = new FormGroup({
    identificador: new FormControl(22, []),
    nombre: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
    ingredientes: new FormControl('', [Validators.required]),
    preparacion: new FormControl('', [Validators.required]),
    tipo: new FormControl('', []),
  })

  constructor (private _recetaService: ServicioRecetasService,
    ) { }

  ngOnInit(): void {

  }

  agregarReceta() {
    if (this.form.invalid) {
      alert('La informacion ingresada es incorrecta o incompleta');
      return
    }

    const receta: Receta = <Receta>(this.form.getRawValue())

    this._recetaService.agregarReceta(receta)
  }

}
