import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersLongestShortestIntervalComponent } from './producers-longest-shortest-interval.component';

describe('ProducersLongestShortestIntervalComponent', () => {
  let component: ProducersLongestShortestIntervalComponent;
  let fixture: ComponentFixture<ProducersLongestShortestIntervalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducersLongestShortestIntervalComponent]
    });
    fixture = TestBed.createComponent(ProducersLongestShortestIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
