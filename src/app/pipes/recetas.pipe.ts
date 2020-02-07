import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetasFiltro'
})
export class RecetasPipe implements PipeTransform {

  /**
    * filtro para filtrar por nombre, cocinero, ingredientes, con o sin gluten
    * @param recetas: array de recetas json
    * @param checkGluten: boleano cheackear si tiene gluten
    * @param busqueda: cadena de texto a filtrar
    */
  transform(recetas: any, checkGluten: boolean, busqueda: string): any {

    let resultado = recetas;

    console.debug('checkGluten ', checkGluten);
    console.debug('busqueda ', busqueda);

    // filtrar recetas sin gluten
    if (checkGluten) {
      resultado = resultado.filter((el) => el.isGlutenFree);
    }

    // filtrar por nombre receta o nombre cocinero o ingredientes
    if (busqueda && '' !== busqueda) {

      busqueda = busqueda.toLowerCase();

      resultado = resultado.filter((el) => {
        const ingredientes = el.ingredientes.reduce((c, p) => c + p, '');
        const encontrar = (el.nombre + '$' + el.cocinero + '$' + ingredientes).toLowerCase(); // simbolos para que no se junten palabras
        return encontrar.includes(busqueda);
      });

    }

    return resultado;
  }// transform

}
