import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosWinnersComponent } from './studios-winners.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('StudiosWinnersComponent', () => {
  let component: StudiosWinnersComponent;
  let fixture: ComponentFixture<StudiosWinnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudiosWinnersComponent],
      imports: [
        HttpClientModule,
        FontAwesomeModule,
      ],
    });
    fixture = TestBed.createComponent(StudiosWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
