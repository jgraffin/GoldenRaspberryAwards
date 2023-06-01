import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listMovies?: any = [];

  page: number = 1;
  count: number = 0;
  tableSize: number = 15;

  options = [
    { name: 'Yes/No', value: 0 },
    { name: 'Yes', value: 1 },
    { name: 'No', value: 2 },
  ];

  selected: number = 1;

  filterForm!: FormGroup;

  constructor(private service: ListService) {}

  ngOnInit(): void {
    this.service.getListMovies().subscribe((items) => {
      this.listMovies = items.content;
      this.count = this.listMovies.totalPages;
    });

    // Get fields
    this.filterForm = new FormGroup({
      filterByYear: new FormControl('', Validators.maxLength(4)),
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

  get filterByYear() {
    return this.filterForm.get('filterByYear')!;
  }

  get filterByWinner() {
    return this.filterForm.get('filterByWinner')!;
  }

  onFilterByYear() {
    const year = this.filterByYear.value;

    this.service.getListMovieByYear(Number(year)).subscribe((date) => {
      if (date.content.length > 0) {
        this.listMovies = date.content;
      } else {
        this.fetchMovies();
      }
    });
  }

  onFilterByWinner() {
    if (this.filterByWinner.value === 'Yes') {
      this.service
        .getListMovieByWinner(Boolean(this.filterByWinner.value))
        .subscribe((date) => {
          if (date.content.length > 0) {
            this.listMovies = date.content;
          } else {
            this.fetchMovies();
          }
        });
    }

    if (this.filterByWinner.value === 'No') {
      this.service
        .getListMovieByWinner(Boolean(!this.filterByWinner.value))
        .subscribe((date) => {
          if (date.content.length > 0) {
            this.listMovies = date.content;
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
