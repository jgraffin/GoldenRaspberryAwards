import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listMovies?: any = [];

  page: number = 1;
  count: number = 0;
  tableSize: number = 15;

  options = [
    { name: 'yes', value: 'Yes' },
    { name: 'no', value: 'No' }
  ]

  filterForm!: FormGroup;

  constructor(private service: ListService){}

  ngOnInit(): void {

    this.service.getListMovies().subscribe(items => {
      this.listMovies = items.content
      console.log(this.listMovies)
      this.count = this.listMovies.totalPages
    })

    // this.service.getListMovies().subscribe(
    //   (response) => {
    //     this.listMovies = response;
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    // Get fields
    this.filterForm = new FormGroup({
      filterByWinner: new FormControl(''),
      filterByYear: new FormControl(''),
    });
  }

  fetchPosts(): void {
    this.service.getListMovies().subscribe(
      (response) => {
        this.listMovies = response.content;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  get filterByYear() {
    return this.filterForm.get('filterByYear')!;
  }

  get filterByWinner() {
    return this.filterForm.get('filterByWinner')!;
  }

  submit(){
    // const {filterByYear, filterByWinner} = this.filterForm.value
    // this.service.getListMovies(year, winner).subscribe()

    // console.log(this.options)
  }
}
