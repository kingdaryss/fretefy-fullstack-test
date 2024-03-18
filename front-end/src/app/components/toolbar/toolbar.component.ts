import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToolbarService, navLinkChips } from './toolbar.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  navsLinks$: Observable<navLinkChips[]>;
  constructor(private toolbarService: ToolbarService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.navsLinks$ = this.toolbarService.navsChips$
  }
  removeNavLink(nav: navLinkChips): void {
    console.log(this.activatedRoute)
    this.toolbarService.remove(nav)
  }
}
