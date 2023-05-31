import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosWinnersComponent } from './studios-winners.component';

describe('StudiosWinnersComponent', () => {
  let component: StudiosWinnersComponent;
  let fixture: ComponentFixture<StudiosWinnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudiosWinnersComponent]
    });
    fixture = TestBed.createComponent(StudiosWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
