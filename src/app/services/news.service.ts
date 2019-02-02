import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private postsUrl = 'https://www.satipasala.org/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.postsUrl).pipe(
      tap(_ => console.log('fetched posts'))
    );
  }
}
