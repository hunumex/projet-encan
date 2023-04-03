import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {FetchDataComponent} from "./fetch-data/fetch-data.component";
import {LoginComponent} from "./login/login.component";
import {ContactComponent} from "./contact/contact.component";
import {BiddingComponent} from "./modules/bidding/bidding.component";

const routes: Routes =
  [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'bidding/:id', component: BiddingComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
