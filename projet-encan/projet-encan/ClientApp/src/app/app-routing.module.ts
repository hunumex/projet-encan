import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {FetchDataComponent} from "./fetch-data/fetch-data.component";
import {LoginComponent} from "./login/login.component";
import {ContactComponent} from "./contact/contact.component";
import {BiddingComponent} from "./modules/bidding/bidding.component";
import { ItemListComponent } from './modules/item/item-list/item-list.component';
import { ItemAddComponent } from './modules/item/item-add/item-add.component';
import { ItemUpdateComponent } from './modules/item/item-update/item-update.component';

const routes: Routes =
  [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'item', component: ItemListComponent },
    { path: 'bidding/:id', component: BiddingComponent },
    { path: 'item-add', component: ItemAddComponent },
    { path: 'item-update/:id', component: ItemUpdateComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
