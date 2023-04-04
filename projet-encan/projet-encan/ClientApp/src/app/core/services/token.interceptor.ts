import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CookieService} from "ngx-cookie";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    //const jwt = this.con
    return next.handle(request);
  }
}
export const TokenInterceptorProvider ={
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
