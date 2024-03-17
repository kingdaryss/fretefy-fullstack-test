import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface navLinkChips {
  nomeDescritivo: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private navsChips: BehaviorSubject<navLinkChips[]> = new BehaviorSubject<navLinkChips[]>([{nomeDescritivo: 'Regiões / Home', url: 'home'}]);
  public navsChips$: Observable<navLinkChips[]> = this.navsChips.asObservable();
  constructor() {}
  atualizarNavs (navs: navLinkChips[]): void  { this.navsChips.next(navs) }
}
