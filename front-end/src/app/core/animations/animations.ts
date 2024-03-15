import { animate, query, style, transition, trigger } from "@angular/animations";


export class Animations {

  constructor(){}

  static routeFadeAnimation = trigger('routeAnimations', [
    transition('* => *', [
      query(':enter', [style({ width: 'calc(100vw - 40px)', opacity: 0, position: 'absolute', })], {
        optional: true,
      }),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.3s', style({ opacity: 0, width: 'calc(100vw - 40px)', position: 'absolute' })),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.3s', style({ opacity: 1, width: 'calc(100vw - 40px)', position: 'relative' })),
        ],
        { optional: true }
      ),
    ]),
    ]);

}

