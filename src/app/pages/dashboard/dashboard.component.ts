import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { IMovieWinnerByYear } from 'src/app/interfaces/IMovieWinnerByYear';
import { IProducersMaxMin } from 'src/app/interfaces/IProducersMaxMin';
import { IStudioWinners } from 'src/app/interfaces/IStudioWinners';
import { IYearsMultipleWinners } from 'src/app/interfaces/IYearsMultipleWinners';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  // Instantiate service variables for panels with its own current interface
  producersMin$?: Observable<IProducersMaxMin>;
  producersMax$?: Observable<IProducersMaxMin>;
  studioWinners$?: Observable<IStudioWinners>;
  yearsMultipleWinners$?: Observable<IYearsMultipleWinners>;

  constructor(private service: DashboardService){}

  ngOnInit(): void {

    // Get all Max/Min Interval Producers list
    this.producersMin$ = this.service.getProducersMaxMin();
    this.producersMax$ = this.service.getProducersMaxMin();

    // Get Years Multiple Winners list
    this.yearsMultipleWinners$ = this.service.getYearsMultipleWinners();

    // Get Winner Studios list
    this.studioWinners$ = this.service.getStudiosWinners()
  }
}
