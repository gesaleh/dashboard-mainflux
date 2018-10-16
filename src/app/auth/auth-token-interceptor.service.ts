import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { NbAuthService } from '@nebular/auth';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private inj: Injector,
    private authService: NbAuthService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.inj.get(NbAuthService);
    const jwt = this.authService.getToken().pipe(switchMap(t => t.getValue()));
    console.log('Token: ', jwt);
    request = request.clone({
      setHeaders: {
        Authorization: `${jwt}`,
      },
    });

    return next.handle(request);
  }
}
