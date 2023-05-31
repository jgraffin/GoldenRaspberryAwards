import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsMultipleWinnersComponent } from './years-multiple-winners.component';

describe('YearsMultipleWinnersComponent', () => {
  let component: YearsMultipleWinnersComponent;
  let fixture: ComponentFixture<YearsMultipleWinnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearsMultipleWinnersComponent]
    });
    fixture = TestBed.createComponent(YearsMultipleWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
