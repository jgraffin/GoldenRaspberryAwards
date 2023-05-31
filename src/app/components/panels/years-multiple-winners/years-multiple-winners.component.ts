import { Component, Input, OnInit } from '@angular/core';
import { IYearsMultipleWinners } from 'src/app/interfaces/IYearsMultipleWinners';

@Component({
  selector: 'app-years-multiple-winners',
  templateUrl: './years-multiple-winners.component.html',
  styleUrls: ['./years-multiple-winners.component.scss']
})
export class YearsMultipleWinnersComponent implements OnInit {
  @Input() yearsMultipleWinners?: IYearsMultipleWinners;

  ngOnInit(): void {

  }

}
