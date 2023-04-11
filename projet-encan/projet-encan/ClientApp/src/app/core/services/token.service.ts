import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    if(!!token) {
      const tokenParts = token.split('.');
      const tokenPayload = JSON.parse(atob(tokenParts[1]));

      // Check if the token is expired and return
      // true or false
      const now = new Date();
      const isExpired = tokenPayload.exp < now.getTime() / 1000;
      if(isExpired) {
        localStorage.removeItem('token');
        localStorage.removeItem('authority');
        console.log('Token expired');
        return false;
      }
      console.log(tokenPayload.authority);
      localStorage.setItem('authority', tokenPayload.Admin);
      return true;
    }
    return false;
  }
  isAdmin(): boolean {
    const isAdmin = localStorage.getItem('authority');
    return isAdmin === 'True';
  }
  removeTokenAndAuthority(): void {
    if(this.isTokenValid()) {
      localStorage.removeItem('token');
      localStorage.removeItem('authority');
    }
  }

}
