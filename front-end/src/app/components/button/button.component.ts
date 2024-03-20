import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color: 'primary' | 'success' | 'warning' | 'danger' | null | 'normal' = 'normal';
  @Input() routerLinkActive: string;
  isActive: boolean = false;
  constructor(private elementRef: ElementRef, private router: Router) {}
  ngOnInit(): void {
    this.checkParentActive();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.checkParentActive());
  }
  checkParentActive(): void {
    setTimeout(() => this.isActive = this.elementRef.nativeElement.classList.contains(this.routerLinkActive))
  }
}
