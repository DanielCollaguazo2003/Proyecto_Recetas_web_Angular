import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/domain/receta';

@Component({
  selector: 'app-recetas-component',
  templateUrl: './recetas-component.component.html',
  styleUrls: ['./recetas-component.component.css']
})
export class RecetasComponentComponent {

  @Input() recetas: Receta[] = [];


}
