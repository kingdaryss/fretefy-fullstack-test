import { Component, OnInit } from '@angular/core';
import { ToolbarService, navLinkChips } from './toolbar.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  navsLinks$: Observable<navLinkChips[]>;
  constructor(private toolbarService: ToolbarService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void { this.navsLinks$ = this.toolbarService.navsChips$ }
  removeNavLink(nav: navLinkChips): void {
    /* TODO
      fazer lógica para quando for remover o elemento,
      verificar se a routerLink é a atual da activatedRoute,
      se for redirecionar para o url do index 0
    */
    this.toolbarService.remove(nav)
  }
}
