import { Component, OnInit } from '@angular/core';
import { RECETAS } from '../../modelo/recetas';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  recetas: Array<any>;

  constructor() {
    console.log('RecetarioComponent constructor');

    this.recetas = RECETAS.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    });

  }// constructor

  ngOnInit() {
    console.log('RecetarioComponent ngOnInit');
  }// ngOnInit

}// RecetarioComponent
