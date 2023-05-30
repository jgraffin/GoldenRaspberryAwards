import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject, takeUntil } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<any>();

  producersMin$?: Observable<any>;
  producersMax$?: Observable<any>;
  studioWinners$?: Observable<any>;

  yearsMultipleWinners$?: Observable<any>;
  movieWinnerByYear?: Observable<number>;

  faMagnifyingGlass = faMagnifyingGlass;

  year = '';
  winnerYears?: any = [];
  searchForm!: FormGroup;

  constructor(private service: DashboardService){}

  ngOnInit(): void {

    // Get all Max/Min Interval Producers list
    this.producersMin$ = this.service.getProducersMaxMin();
    this.producersMax$ = this.service.getProducersMaxMin();

    // Get Years Multiple Winners list
    this.yearsMultipleWinners$ = this.service.getYearsMultipleWinners();

    // Get Winner Studios list
    this.studioWinners$ = this.service.getStudiosWinners()

    // Initialize forms
    this.searchForm = new FormGroup({
      year: new FormControl(''),
    });
  }

  get searchBy() {
    return this.searchForm.get('year')!;
  }

  submit() {
    if (this.searchForm.invalid) {
      return;
    }

    const date = this.searchForm.value;

    this.service.getMovieWinnerByYear(date.year).subscribe(values => {
      this.winnerYears = values;
    });
  }
}
