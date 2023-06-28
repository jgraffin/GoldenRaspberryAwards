import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IListMovies } from 'src/app/interfaces/IListMovies';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {
  // It might return any, but observable content is typed within
  listMovies?: IListMovies | any;

  // Pagination
  page = 0;
  count = 1;
  tableSize = 4;

  // Form
  filterForm!: FormGroup;
  winner: true;
  options = [
    { name: 'Yes', value: 0 },
    { name: 'No', value: 1 },
  ];

  constructor(private service: ListService) {}

  ngOnInit(): void {
    this.getTotalItems();

    // Get fields
    this.filterForm = new FormGroup({
      filterByYear: new FormControl('', [Validators.required, Validators.maxLength(4)]),
      filterByWinner: new FormControl(''),
    });
  }

  handleFilterYear() {
    const year = +this.filterForm.get('filterByYear').value;
    const winner = this.filterForm.get('filterByWinner').value;

    if (year) {
      this.service.getListMovieByYear(this.page, this.count, winner, year).subscribe({
        next: (response) => (this.listMovies = response.content),
        error: (err) => console.error(err),
      });
    } else {
      this.getTotalItems();
    }
 }

  getTotalItems() {
    // Get totalItems from service, by passing required fields, where
    // this.page = 0;
    // this.count = 1;
    this.service.getListMovies(this.page, this.count).subscribe({
      next: (response) => {
        this.count = response.totalElements;

        if (this.count > 1) {
          this.retrieveMovies();
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  retrieveMovies() {
    // Get all movies by passing the correct value retrieved from service, where
    // this.page = 0;
    // this.count = value retrieved;
    this.service.getListMovies(this.page, this.count).subscribe({
      next: (response) => {
        const {
          content,
          pageable: { pageSize },
        } = response;
        const value = pageSize / 14;

        this.listMovies = content;
        this.tableSize = +value.toFixed();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  onTableDataChange(currentPage: number) {
    let current = currentPage - 1;
    this.page = currentPage;

    this.service.getListMovies(current, 15).subscribe({
      next: (response) => (this.listMovies = response.content),
      error: (err) => console.error(err),
    });
  }
}
