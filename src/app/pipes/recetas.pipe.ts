import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetasFiltro'
})
export class RecetasPipe implements PipeTransform {

  /**
    * filtro para filtrar por nombre
    * @param datos 
    * @param busqueda 
    */
  transform(datos: any, busqueda: string): any {

    console.debug(datos);
    console.debug(busqueda);

    let resultado: Array<any> = [];

    busqueda = busqueda.trim();

    if (busqueda && '' !== busqueda) {

      busqueda = busqueda.toUpperCase();

      datos.forEach(e => {

        if (e.nombre.toUpperCase().includes(busqueda) || e.cocinero.toUpperCase().includes(busqueda)) {

          resultado.push(e)

        }

      });

    } else {
      resultado = datos;
    }

    return resultado;

  }// transform

}
