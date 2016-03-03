import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
  selector: 'place',
  template: `
  <h3 (click)="doVisit(name)" [ngClass]="{'visited': isVisited }">{{name}}</h3>
  `,
  styles: [`
  .visited {
    text-decoration: line-through;
  }
  `]
})
export class PlaceComponent {

  isVisited: boolean = false;

  @Input() name: string;
  @Output() visit: EventEmitter<any> = new EventEmitter();

  doVisit(placeName: string) {
    this.isVisited = !this.isVisited;
    this.visit.emit({ name: placeName });
  }

}
