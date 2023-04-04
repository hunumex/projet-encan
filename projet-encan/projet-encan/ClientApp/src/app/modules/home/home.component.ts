import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../core/services/http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items!: any;
  biddingSuccess: boolean = true;
  lastBiddings!: any;

  constructor(private ApiService: ApiService) {
  }

  ngOnInit(): void {
    this.ApiService.getData().itemList.subscribe(data => {
      this.items = data;
      this.ApiService.getData({id: 1}).biddingByItem.subscribe(data => {
      }, error => console.error("Get Bidding By Item", error));
    }, error => console.error("Get Item List", error));
  }

}
