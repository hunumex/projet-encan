import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { NavMenuComponent } from './core/components/nav-menu/nav-menu.component';
import {FooterComponent} from "./core/components/footer/footer.component";
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import {HomeComponent} from "./modules/home/home.component";
import {BiddingComponent} from "./modules/bidding/bidding.component";
import { RapportComponent } from './modules/rapport/rapport.component';
import {TokenInterceptorProvider} from "./core/services/token.interceptor";
import {CookieService} from "ngx-cookie";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    FetchDataComponent,
    LoginComponent,
    ContactComponent,
    HomeComponent,
    BiddingComponent,
    RapportComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TokenInterceptorProvider, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
