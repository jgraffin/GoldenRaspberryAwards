import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, Subscription, debounceTime, distinctUntilChanged, switchMap, take } from 'rxjs';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {
  @ViewChild('searchQuery') searchQuery: ElementRef;

  // Datalist
  listMovies?: any = [];

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
  ]

  constructor(private service: ListService) {}

  ngOnInit(): void {

    // Get listMovies service
    this.service.getListMovies().pipe(take(1)).subscribe((items) => {
      this.listMovies = items.content;
      this.count = this.listMovies.totalPages;
    });

    // Get fields
    this.filterForm = new FormGroup({
      filterByWinner: new FormControl(''),
    });
  }

  fetchMovies(): void {
    this.service.getListMovies().subscribe((response) => {
      if (response.content) {
        this.listMovies = response.content;
      }
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchMovies();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchMovies();
  }

  get filterByWinner() {
    return this.filterForm.get('filterByWinner')!;
  }

  public onFilterByYear(event: Event) {
    const searchQuery = (event.target as HTMLInputElement).value;
    this.searchSubject.next(searchQuery?.trim());

    // Debouncing results retrieved from service when filtering by Year
    this.searchSubscription = this.searchSubject
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((searchQuery) => this.service.getListMovieByYear(Number(searchQuery)))
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
    if (this.filterByWinner.value === 'Yes') {
      this.service
        .getListMovieByWinner(Boolean(this.filterByWinner.value))
        .subscribe((winner) => {
          if (winner.content.length > 0) {
            this.tableSize = winner.content.length;
            this.listMovies = winner.content;
          } else {
            this.fetchMovies();
          }
        });
    }

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

    if (this.filterByWinner.value === 'Yes/No') {
      this.fetchMovies();
    }
  }
}
