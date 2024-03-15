import { animate, query, style, transition, trigger } from "@angular/animations";


export class Animations {

  constructor(){}

  static routeFadeAnimation = trigger('routeAnimations', [
    transition('* => *', [
      query(':enter', [style({ opacity: 0, position: 'absolute' })], {
        optional: true,
      }),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.2s', style({ opacity: 0, position: 'absolute' })),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.2s', style({ opacity: 1, position: 'relative' })),
        ],
        { optional: true }
      ),
    ]),
    ]);

}

