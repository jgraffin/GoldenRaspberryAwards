import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  getMovieWinnerByYear(year: number): Observable<any> {
    return this.http.get<any>(`${this.baseApiUrl}?winner=true&year=${year}`);
  }

  getProducersMaxMin(): Observable<any> {
    return this.http.get<any>(this.producersMaxMinURL);
  }

  getYearsMultipleWinners(): Observable<any> {
    return this.http.get<any>(this.yearsMultipleWinnersURL);
  }

  getStudiosWinners(): Observable<any> {
    return this.http.get<any>(this.studioWinnersURL);
  }
}
