import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/components/loading/loader.service';
@Injectable({ providedIn: 'root' })
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();
    const url = 'loading-' + req.url
    localStorage.setItem(url, 'true')
    return next.handle(req).pipe(
      finalize(() => {
        localStorage.removeItem(url);
        this.loaderService.hideLoader();
      })
    );
  }
}
