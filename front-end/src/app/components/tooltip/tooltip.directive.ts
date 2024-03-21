import { Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2 } from '@angular/core';
@Directive({ selector: '[appTooltip]' })
export class TooltipDirective implements OnDestroy {
  @Input('appTooltip') tooltipText: string;
  tooltip: HTMLElement;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter', ['$event']) onMouseEnter() { this.show(); }
  @HostListener('mouseleave', ['$event']) onMouseLeave() { this.hide(); }
  @HostListener('touchstart', ['$event']) onTouchStart() { this.show(); }
  @HostListener('touchend', ['$event']) onTouchEnd() { this.hide(); }
  ngOnDestroy() { this.remove(); }
  private show() {
    if (!this.tooltip) {
      this.tooltip = this.renderer.createElement('div');
      const text = this.renderer.createText(this.tooltipText);
      this.renderer.appendChild(this.tooltip, text);
      this.renderer.appendChild(document.body, this.tooltip);
      this.renderer.addClass(this.tooltip, 'tooltip');
    }
    const hostPos = this.elementRef.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltip.getBoundingClientRect();
    const top = hostPos.top - tooltipPos.height - 5;
    const left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    this.renderer.setStyle(this.tooltip, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
    this.renderer.addClass(this.tooltip, 'show');
  }
  private hide() { if (this.tooltip) { this.renderer.removeClass(this.tooltip, 'show'); } }
  private remove() {
    if (this.tooltip) {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }
  }
}
