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
export class DashboardService {
  private baseApiUrl = environment.baseApiUrl;
  private producersMaxMinURL = `${this.baseApiUrl}?projection=max-min-win-interval-for-producers`;
  private yearsMultipleWinnersURL = `${this.baseApiUrl}?projection=years-with-multiple-winners`;
  private studioWinnersURL = `${this.baseApiUrl}?projection=studios-with-win-count`;

  //?page=9&size=99&winner=true&year=2018

  constructor(private http: HttpClient) {}

  getMovieWinnerByYear(year: number): Observable<IMovieWinnerByYear[]> {
    return this.http.get<IMovieWinnerByYear[]>(`${this.baseApiUrl}?winner=true&year=${year}`);
  }

  getProducersMaxMin(): Observable<IProducersMaxMin> {
    return this.http.get<IProducersMaxMin>(this.producersMaxMinURL);
  }

  getYearsMultipleWinners(): Observable<IYearsMultipleWinners> {
    return this.http.get<IYearsMultipleWinners>(this.yearsMultipleWinnersURL);
  }

  getStudiosWinners(): Observable<IStudioWinners> {
    return this.http.get<IStudioWinners>(this.studioWinnersURL);
  }
}
