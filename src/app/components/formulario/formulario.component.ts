import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Receta } from 'src/app/domain/receta';
import { ServicioRecetasService } from 'src/app/servicio-recetas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormulacioRecetasComponent implements OnInit {

  public previsualizacion?: string;

  receta?: Receta | null;
  ident: number = this._recetaService.obtenerTamanioReceta();

  form = new FormGroup({
    identificador: new FormControl(this.ident + 1, []),
    nombre: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
    ingredientes: new FormControl('', [Validators.required]),
    preparacion: new FormControl('', [Validators.required]),
    tipo: new FormControl('', []),
  })

  constructor(private _recetaService: ServicioRecetasService, private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

  }

  agregarReceta() {
    if (this.form.invalid) {
      alert('La informacion ingresada es incorrecta o incompleta');
      return
    }

    const receta: Receta = <Receta>(this.form.getRawValue())
    receta.imagen = this.previsualizacion;

    this._recetaService.agregarReceta(receta)

    this.form.reset();
    this.previsualizacion = '';
  }

  capturarFile(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.previsualizacion = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}
