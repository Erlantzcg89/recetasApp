import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RECETAS } from '../../modelo/recetas';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.scss']
})
export class RecetaDetalleComponent implements OnInit {

  id: number;
  recetas: Array<any>;
  rSeleccionada: any;

  constructor(private route: ActivatedRoute) {

    this.recetas = RECETAS.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    });
    this.id = 0;
    this.rSeleccionada = '';

    this.route.params.subscribe(params => {
      console.log('params: %o', params);
      return this.id = +params['idReceta'];
    });

    this.rSeleccionada = this.recetas.find(element => {
      console.log('iteraciones: ' + element.id);
      return element.id === this.id;
    });

    console.log('Receta seleccionada : %o', this.rSeleccionada);

  }

  getId(id: number) {

  }

  ngOnInit() {
  }

}
