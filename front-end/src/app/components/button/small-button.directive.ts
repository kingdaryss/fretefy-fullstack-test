import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appSmallButton]'
})
export class SmallButtonDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void { this.renderer.addClass(this.elementRef.nativeElement, 'small-app-button'); }
}
