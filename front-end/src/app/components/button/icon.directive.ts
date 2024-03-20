import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appIcon]'
})
export class IconDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void { this.renderer.addClass(this.elementRef.nativeElement, 'transparent'); }
}
