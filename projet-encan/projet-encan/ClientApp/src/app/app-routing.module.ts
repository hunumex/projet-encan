import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {LoginComponent} from "./login/login.component";
import {ContactComponent} from "./modules/contact/contact.component";
import {BiddingComponent} from "./modules/bidding/bidding.component";
import { RapportComponent } from './modules/rapport/rapport.component';
import {AuthGuard} from "./core/services/auth.guard";
import {AuthorizationGuard} from "./core/services/authorization.guard";
import {env} from "../environments/env";

const routes: Routes =
  [
    { path: env.rout_url.home, component: HomeComponent, pathMatch: 'full', canActivate:[AuthGuard] },
    { path: env.rout_url.login, component: LoginComponent, pathMatch: 'full'},
    { path: env.rout_url.contact, component: ContactComponent, pathMatch: 'full', canActivate:[AuthGuard] },
    { path: env.rout_url.bidding+'/:id', component: BiddingComponent, pathMatch: 'full', canActivate:[AuthGuard] },
    { path: env.rout_url.rapport, component: RapportComponent, pathMatch: 'full', canActivate:[AuthGuard, AuthorizationGuard] }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
