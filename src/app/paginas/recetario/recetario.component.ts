import { Component, OnInit } from '@angular/core';
import { RECETAS } from '../../modelo/recetas';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  recetas: Array<any>;
  rSeleccionada: any;
  busqueda: string;
  conGluten: boolean;

  constructor(private recetasService: RecetasService) {
    console.log('RecetarioComponent constructor');

    // this.recetas = RECETAS.sort((a, b) => {
    //   if (a.nombre < b.nombre) {
    //     return -1;
    //   }
    //   if (a.nombre > b.nombre) {
    //     return 1;
    //   }
    //   return 0;
    // });

    this.recetasService.getAll().subscribe(
      data => {
        console.debug('peticion ok %o', data);
        this.recetas = data.sort((a, b) => {
          if (a.nombre < b.nombre) {
            return -1;
          }
          if (a.nombre > b.nombre) {
            return 1;
          }
          return 0;
        });
      },
      error => console.warn(error)
    );

    this.rSeleccionada = '';
    this.busqueda = '';
    this.conGluten = false;

  }// constructor

  seleccionarReceta = function (receta) {
    console.log("seleccionarReceta( id: " + receta.id + ", nombre: " + receta.nombre + ")");

    this.rSeleccionada = receta;

  }// seleccionarReceta

  update(arrayRecetas: Array<any>) {
    this.recetasService.update(arrayRecetas).subscribe(
      data => {
        console.debug('peticion ok %o', data);
      },
      error => console.warn(error)
    );
  }// update

  ngOnInit() {
    console.log('RecetarioComponent ngOnInit');
  }// ngOnInit

}// RecetarioComponent
