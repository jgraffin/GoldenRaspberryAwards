import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IListContent } from '../interfaces/IListMovies';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private baseApiUrl = environment.baseApiUrl;
  private listMoviesURL = this.baseApiUrl;

  constructor(private http: HttpClient) {}

  getListMovies(currentPage?: number, size?: number): Observable<IListContent> {
    console.log('currentPage', currentPage, 'size ', size)
    return this.http.get<IListContent>(`${this.listMoviesURL}?page=${currentPage}&size=${size}`);
  }

  getListMovieByYear(year: number): Observable<any> {
    return this.http.get<any>(
      `${this.listMoviesURL}?page=0&size=206&year=${year}`
    );
  }

  getListMovieByWinner(winner: boolean): Observable<any> {
    return this.http.get<any>(
      `${this.listMoviesURL}?page=0&size=206&winner=${winner}`
    );
  }
}
