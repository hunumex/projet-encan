import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  saveAuthority(authority: boolean): void {
    localStorage.setItem('authority', authority.toString());
  }
  isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    // Check if token is expired and return
    // true or false
    return !! token;
  }
  isAdmin(): boolean {
    const isAdmin = localStorage.getItem('authority');
    return isAdmin === 'true';
  }
  removeTokenAndAuthority(): void {
    if(this.isTokenValid()) {
      localStorage.removeItem('token');
      localStorage.removeItem('authority');
    }
  }

}
