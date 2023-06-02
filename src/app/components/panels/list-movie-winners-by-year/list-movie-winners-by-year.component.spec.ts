import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieWinnersByYearComponent } from './list-movie-winners-by-year.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ListMovieWinnersByYearComponent', () => {
  let component: ListMovieWinnersByYearComponent;
  let fixture: ComponentFixture<ListMovieWinnersByYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMovieWinnersByYearComponent],
      imports: [
        HttpClientModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });
    fixture = TestBed.createComponent(ListMovieWinnersByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
