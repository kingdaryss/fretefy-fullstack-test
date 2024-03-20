import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoading = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoading.asObservable();
  showLoader() { this.isLoading.next(true) }
  hideLoader() { if (!this.checkLocalStorage()){ this.isLoading.next(false) } }
  checkLocalStorage(): boolean {
    let found = false;
    Object.entries(localStorage).forEach(([key, value]) => {
      if (key.includes('loading')) {
        found = true;
      }
    });
    return found;
  }
}
