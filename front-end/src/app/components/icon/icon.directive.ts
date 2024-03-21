import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
@Directive({ selector: '[appIcon]' })
export class IconDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void { this.renderer.addClass(this.elementRef.nativeElement, 'material-symbols-outlined'); }
}
@Directive({ selector: '[appIconFill]' })
export class IconFillDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void { this.addClass('material-symbols-outlined'); this.addClass('fill'); }
  addClass(key: string): void { this.renderer.addClass(this.elementRef.nativeElement, key); }
}
