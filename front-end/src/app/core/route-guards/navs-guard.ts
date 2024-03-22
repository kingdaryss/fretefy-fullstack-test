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
      if (next.params['id']) {
        this.toolbarService.update({name: `${next.data.name} / ${next.params['id']}` , url: state.url, isRemove: true});
      }
      return true;
  }
}
