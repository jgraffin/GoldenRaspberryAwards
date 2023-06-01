import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovieWinnerByYear } from '../interfaces/IMovieWinnerByYear';
import { IProducersMaxMin } from '../interfaces/IProducersMaxMin';
import { IYearsMultipleWinners } from '../interfaces/IYearsMultipleWinners';
import { IStudioWinners } from '../interfaces/IStudioWinners';


@Injectable({
  providedIn: 'root',
})
export class ListService {
  private baseApiUrl = environment.baseApiUrl;
  private listMoviesURL = this.baseApiUrl;

  constructor(private http: HttpClient) {}

  getListMovies(): Observable<any> {
    return this.http.get(`${this.listMoviesURL}?page=0&size=99`);
  }

  getListMovieByYear(year: number): Observable<any> {
    return this.http.get(`${this.listMoviesURL}?page=0&size=99&year=${year}`);
  }

  getListMovieByWinner(winner: boolean): Observable<any> {
    return this.http.get(`${this.listMoviesURL}?page=0&size=99&winner=${winner}`);
  }
}
