import { Component } from '@angular/core';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isAdmin: boolean;
  constructor(private tokenService: TokenService) {
    this.isAdmin = this.tokenService.isAdmin();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  deconnexion(){
    this.tokenService.removeTokenAndAuthority();
    window.location.reload();
  }
}
