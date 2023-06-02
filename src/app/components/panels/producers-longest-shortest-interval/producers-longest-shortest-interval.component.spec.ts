import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersLongestShortestIntervalComponent } from './producers-longest-shortest-interval.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ProducersLongestShortestIntervalComponent', () => {
  let component: ProducersLongestShortestIntervalComponent;
  let fixture: ComponentFixture<ProducersLongestShortestIntervalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducersLongestShortestIntervalComponent],
      imports: [
        HttpClientModule,
        FontAwesomeModule,
      ],
    });
    fixture = TestBed.createComponent(ProducersLongestShortestIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
