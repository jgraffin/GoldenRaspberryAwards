import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseApiUrl = environment.baseApiUrl;
  private winner = `${this.baseApiUrl}?winner=true&year=2018`;
  private producersMaxMin = `${this.baseApiUrl}?projection=max-min-win-interval-for-producers`;
  private yearsMultipleWinners = `${this.baseApiUrl}?projection=years-with-multiple-winners`;

  //?page=9&size=99&winner=true&year=2018
  // ?winner=true&year=2018) Works!
  // ?projection=max-min-win-interval-for-producers Works!
  // ?projection=studios-with-win-count Works!
  // ?projection=years-with-multiple-winners Works!

  constructor(private http: HttpClient) {}

  getWinner(): Observable<any> {
    return this.http.get<any>(this.winner);
  }

  getProducersMaxMin(): Observable<any> {
    return this.http.get<any>(this.producersMaxMin);
  }

  getYearsMultipleWinners(): Observable<any> {
    return this.http.get<any>(this.yearsMultipleWinners);
  }
}
