import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaz/index.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}