import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appButton]' })
export class ButtonDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    const button = this.elementRef.nativeElement.parentNode;
    this.renderer.removeAttribute(button, 'tabindex'); }
}
