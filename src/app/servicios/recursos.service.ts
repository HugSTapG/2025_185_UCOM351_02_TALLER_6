import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private readonly http: HttpClient) { }

  obtenerDatos() {
    return this.http.get('http://dawm-fiec-espol-default-rtdb.firebaseio.com/photos.json')
  }
}
