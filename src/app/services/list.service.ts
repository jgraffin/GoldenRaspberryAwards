import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IListMovies } from '../interfaces/IListMovies';

type RequestParams = {
  currentPage?: number,
  size?: number,
  winner?: boolean,
  year?: number
}

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private baseApiUrl = environment.baseApiUrl;
  private listMoviesURL = this.baseApiUrl;

  constructor(private http: HttpClient) {}

  getListMovies(currentPage: number, size: number): Observable<IListMovies> {
    return this.http.get<IListMovies>(`${this.listMoviesURL}?page=${currentPage}&size=${size}`);
  }

  getListMovieByYear(currentPage: number, size: number, winner: boolean, year: number): Observable<any> {
    return this.http.get<any>(
      `${this.listMoviesURL}?page=${currentPage}&size=${size}&winner=${winner}&year=${year}`
    );
  }

  getListMovieByWinner(winner: boolean): Observable<any> {
    return this.http.get<any>(
      `${this.listMoviesURL}?page=0&size=206&winner=${winner}`
    );
  }
}
