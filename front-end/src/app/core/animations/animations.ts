import { animate, query, style, transition, trigger, AnimationTriggerMetadata, state } from "@angular/animations";
export class Animations {
  static animationDuration: string = '0.3s';
  static animationStyles: any = {
    position: 'absolute',
    width: 'calc(100vw - 40px)',
  };
  static routeFadeAnimation: AnimationTriggerMetadata = trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter', [
        style({ ...Animations.animationStyles, opacity: 0 }),
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1 }),
        animate(Animations.animationDuration, style({ ...Animations.animationStyles, opacity: 0 })),
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        animate(Animations.animationDuration, style({ ...Animations.animationStyles, opacity: 1 })),
      ], { optional: true }),
    ]),
  ]);
  static fadeOutAnimation: AnimationTriggerMetadata = trigger('fadeInOut', [
    state('void', style({ opacity: 0 })),
    transition('void <=> *', animate(300)),
  ])
}
