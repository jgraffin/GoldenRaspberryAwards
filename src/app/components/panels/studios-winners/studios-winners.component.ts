import { Component, Input } from '@angular/core';
import { IStudioWinners } from 'src/app/interfaces/IStudioWinners';

@Component({
  selector: 'app-studios-winners',
  templateUrl: './studios-winners.component.html',
  styleUrls: ['./studios-winners.component.scss']
})
export class StudiosWinnersComponent {
  @Input() studioWinners?: IStudioWinners;
}
