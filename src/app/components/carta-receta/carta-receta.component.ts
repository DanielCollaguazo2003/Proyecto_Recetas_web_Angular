import { Component, Input } from '@angular/core';
import { Receta } from 'src/app/domain/receta';

@Component({
  selector: 'app-carta-receta',
  templateUrl: './carta-receta.component.html',
  styleUrls: ['./carta-receta.component.css']
})
export class CartaRecetaComponent {
  @Input() receta?: Receta;
}
