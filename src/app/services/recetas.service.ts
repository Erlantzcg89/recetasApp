import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http: HttpClient) {
    console.trace("RecetasService Constructor");
  }// constructor

  getAll(): Observable<any> {

    const url = `https://api.myjson.com/bins/1128gg`;

    console.trace('RecetasService getAll' + url);

    return this.http.get(url);
  }// getAll

  update(arrayRecetas: Array<any>): Observable<any> {

    const url = `https://api.myjson.com/bins/1128gg`;

    return this.http.put(url, arrayRecetas);
  }// put

}
