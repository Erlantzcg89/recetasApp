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

    let resultado;
    let nombre;
    let ingrediente;
    let cocinero;

    busqueda = busqueda.trim();

    if (busqueda && '' !== busqueda) {

      busqueda = busqueda.toUpperCase();

      resultado = datos.filter((el) => {
        console.debug(el);
        nombre = el.nombre.toUpperCase();
        return nombre.includes(busqueda);
      });

    } else {
      resultado = datos;
    }

    return resultado;

  }// transform

}
