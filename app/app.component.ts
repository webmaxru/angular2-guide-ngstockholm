import { Component } from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { GuideComponent } from './guide.component'
import { PlacesComponent } from './places.component';
import { FeedbackComponent } from './feedback.component';

@Component({
  selector: 'app',
  template: `
  <guide></guide>
  <places></places>
  <feedback></feedback>
	`,
  directives: [ROUTER_DIRECTIVES, GuideComponent, PlacesComponent, FeedbackComponent],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS]
})
@RouteConfig([
  { path: '/places', as: 'Places', component: PlacesComponent },
  { path: '/feedback', as: 'Feedback', component: FeedbackComponent }
])
export class AppComponent {
}
