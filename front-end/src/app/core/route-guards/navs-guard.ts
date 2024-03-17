import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToolbarService } from 'src/app/components/toolbar/toolbar.service';

@Injectable({
  providedIn: 'root'
})
export class NavsGuard implements CanActivate {
  constructor(private toolbarService: ToolbarService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.toolbarService.atualizarNavs([{nomeDescritivo: 'Regiões / Home', url: 'home'}, {nomeDescritivo: 'Região Nordeste', url: 'regiao/Nordeste'}, {nomeDescritivo: 'Região Sul', url: 'regiao/Sul'}]);
      return true;
  }
}
