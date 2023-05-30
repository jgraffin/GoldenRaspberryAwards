import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  producersMin?: any = [];
  producersMax?: any = [];

  yearsMultipleWinners?: any = [];

  private destroy$ = new Subject();

  faMagnifyingGlass = faMagnifyingGlass;

  constructor(private service: DashboardService){}

  ngOnInit(): void {

    // Get all Max/Min Interval Producers
    this.service.getProducersMaxMin().pipe(takeUntil(this.destroy$)).subscribe((items) => {
      const { min, max } = items;

      this.producersMin = min;
      this.producersMax = max;

    });

    // Get Years Multiple Winners
    this.service.getYearsMultipleWinners().subscribe((items) => {
      const { years } = items;

      this.yearsMultipleWinners = years;

    });
  }
}
