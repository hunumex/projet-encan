import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenService} from "./token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.tokenService.isTokenValid()) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.tokenService.getToken())
        });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
export const TokenInterceptorProvider ={
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
