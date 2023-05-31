import { Component, Input } from '@angular/core';
import { IProducersMaxMin } from 'src/app/interfaces/IProducersMaxMin';

@Component({
  selector: 'app-producers-longest-shortest-interval',
  templateUrl: './producers-longest-shortest-interval.component.html',
  styleUrls: ['./producers-longest-shortest-interval.component.scss']
})
export class ProducersLongestShortestIntervalComponent {
  @Input() producersMin?: IProducersMaxMin;
  @Input() producersMax?: IProducersMaxMin;
}
