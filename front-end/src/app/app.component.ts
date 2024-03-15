import { Component } from '@angular/core';
import { Animations } from './core/animations/animations';
import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [Animations.routeFadeAnimation]
})
export class AppComponent {
  title = 'fretefy-fullstack';

  constructor(private contexts: ChildrenOutletContexts){}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
