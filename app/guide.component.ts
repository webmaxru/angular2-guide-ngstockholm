import {Component} from 'angular2/core';

@Component({
  selector: 'guide',
  template: `
	<h1>Hello {{city}}!</h1>
	`,
})

export class GuideComponent {
  
  city: string;

  constructor() {
    this.city = 'Riga'
  }

}
