import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IMovieWinnerByYear } from 'src/app/interfaces/IMovieWinnerByYear';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-list-movie-winners-by-year',
  templateUrl: './list-movie-winners-by-year.component.html',
  styleUrls: ['./list-movie-winners-by-year.component.scss'],
})
export class ListMovieWinnersByYearComponent implements OnInit {
  // Icons
  faMagnifyingGlass = faMagnifyingGlass;

  // Initial state
  movieWinnerByYear: IMovieWinnerByYear[] = [];

  // Initialize formGroup and fields
  searchForm!: FormGroup;
  year = '';

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    // Get fields
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

    const { year } = this.searchForm.value;

    this.service.getMovieWinnerByYear(year).subscribe((value) => {
      this.movieWinnerByYear = value;
    });
  }
}
