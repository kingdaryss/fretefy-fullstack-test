import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export interface navLinkChips {
  name: string;
  url: string;
  isRemove: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private navsChips: BehaviorSubject<navLinkChips[]> = new BehaviorSubject<navLinkChips[]>([{name: 'Região / Home', url: 'home', isRemove: false}]);
  public navsChips$: Observable<navLinkChips[]> = this.navsChips.asObservable();
  constructor() {}
  update (nav: navLinkChips): void {
    if (this.navsChips.getValue().filter((navFilter: navLinkChips) => navFilter.url === nav.url).length) {
      return;
    }
    this.navsChips.next([...this.navsChips.getValue(), nav]);
  }
  remove (nav: navLinkChips): void {
    this.navsChips.next(this.navsChips.getValue().filter((navFilter: navLinkChips) => navFilter.url != nav.url));
  }
}
