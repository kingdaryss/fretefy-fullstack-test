import { Component } from '@angular/core';
import { Animations } from './core/animations/animations';
import { ChildrenOutletContexts } from '@angular/router';
import { locale, loadMessages } from 'devextreme/localization';

import * as ptMessages from 'devextreme/localization/messages/pt.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [Animations.routeFadeAnimation]
})
export class AppComponent {
  title = 'Fretefy';

  constructor(private contexts: ChildrenOutletContexts){
    loadMessages(ptMessages)
    locale('pt');
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
