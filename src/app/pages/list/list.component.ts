import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  take,
} from 'rxjs';
import { IListMovies } from 'src/app/interfaces/IListMovies';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {
  @ViewChild('searchQuery') searchQuery: ElementRef;

  // It might return any, but observable content is typed within
  // Service as IListContent
  listMovies?: IListMovies | any;

  // Pagination
  private readonly searchSubject = new Subject<string | undefined>();
  page: number = 1;
  count: number = 0;
  tableSize: number = 15;
  searchSubscription?: Subscription;

  // Form
  filterForm!: FormGroup;
  options = [
    { name: 'Yes/No', value: 0 },
    { name: 'Yes', value: 1 },
    { name: 'No', value: 2 },
  ];

  constructor(private service: ListService, private router: Router) {}

  ngOnInit(): void {

    // Get listMovies service
    this.service
      .getListMovies()
      .pipe(take(1))
      .subscribe((items) => {
        this.listMovies = items.content;
        this.count = this.listMovies.totalPages;
      });

    // Get fields
    this.filterForm = new FormGroup({
      filterByWinner: new FormControl(''),
    });
  }

  fetchMovies(): void {

    // Get all data from listMovies on reset field
    this.service.getListMovies().subscribe((response) => {
      if (response.content) {
        this.listMovies = response.content;
      }
    });
  }

  onTableDataChange(currentPage: number) {

    // It checks the current page
    this.page = currentPage;
    this.fetchMovies();
  }

  onTableSizeChange(event: Event): void {

    // It checks the number of items at the current page whenever the user
    // navigates through the pages
    const target = event.target as HTMLSelectElement;
    this.tableSize = Number(target);
    this.page = 1;
    this.fetchMovies();
  }

  get filterByWinner() {

    // Get form's field value
    return this.filterForm.get('filterByWinner')!;
  }

  onFilterByYear(event: Event) {
    const searchQuery = (event.target as HTMLInputElement).value;
    this.searchSubject.next(searchQuery?.trim());

    // Debouncing results retrieved from service when filtering by Year
    // Good practice when working with huge data in production.
    // Whenever the user type in the form, it will wait 1s to return data
    this.searchSubscription = this.searchSubject
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((searchQuery) =>
          this.service.getListMovieByYear(Number(searchQuery))
        )
      )
      .subscribe((results) => {
        if (results.content.length > 0) {
          this.listMovies = results.content;
        } else {
          this.fetchMovies();
        }
      });
  }

  onFilterByWinner() {

    // If "Yes", send a boolean "true" to the api and retrieve all winners
    if (this.filterByWinner.value === 'Yes') {
      this.service
        .getListMovieByWinner(Boolean(this.filterByWinner.value))
        .subscribe((winner) => {
          if (winner.content) {
            this.tableSize = winner.content.length;
            this.listMovies = winner.content;
          } else {
            this.fetchMovies();
          }
        });
    }

    // If "No", send a boolean "false" to the api and retrieve all no-winners
    if (this.filterByWinner.value === 'No') {
      this.service
        .getListMovieByWinner(Boolean(!this.filterByWinner.value))
        .subscribe((winner) => {
          if (winner.content.length > 0) {
            this.tableSize = winner.content.length;
            this.listMovies = winner.content;
          } else {
            this.fetchMovies();
          }
        });
    }

    // If set, just reset values of the table by retrieving fetchMovies()
    if (this.filterByWinner.value === 'Yes/No') {
      this.ngOnInit();
    }
  }
}
