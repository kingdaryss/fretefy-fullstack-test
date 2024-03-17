import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToolbarService, navLinkChips } from './toolbar.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  navsLinks: navLinkChips[] = [];
  subscription: Subscription;
  constructor(private toolbarService: ToolbarService, private route: Router) {}
  ngOnInit(): void {
    this.subscription = this.toolbarService.navsChips$.subscribe(
      (response) => {
        this.navsLinks = response;
      }
    )
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  removerNavlink(): void {
    this.route.navigate([this.navsLinks[0].url])
    this.navsLinks = this.navsLinks.filter(()=>{[]

    })
    this.toolbarService.atualizarNavs(this.navsLinks)
  }
}
