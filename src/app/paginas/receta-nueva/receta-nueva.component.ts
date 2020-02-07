import { Component, OnInit } from '@angular/core';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-receta-nueva',
  templateUrl: './receta-nueva.component.html',
  styleUrls: ['./receta-nueva.component.scss']
})
export class RecetaNuevaComponent implements OnInit {

  id: number;
  nombre: string;
  recetas: Array<any>;

  constructor(private recetasService: RecetasService) {

    this.nombre = '';

    this.recetasService.getAll().subscribe(
      data => {
        console.debug('peticion ok %o', data);
        this.recetas = data.sort((a, b) => {
          // return +a.id - +b.id;
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

    // this.id = this.recetas[0].id;
    // this.id++;

  }

  update(arrayRecetas: Array<any>) {

    let nuevaReceta = {
      "id": this.id,
      "nombre": this.nombre
    };

    this.recetas.push(nuevaReceta);

    this.recetasService.update(arrayRecetas).subscribe(
      data => {
        console.debug('peticion ok %o', data);
      },
      error => console.warn(error)
    );
  }// update

  ngOnInit() {
  }

}
