import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../core/services/http.service";
import {env} from "../../../environments/env";
import {IItem} from "../../core/interfaces/IItem";
import {IBidding} from "../../core/interfaces/IBidding";
import {IViewDataHome} from "../../core/interfaces/IViewDataHome";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page: number = 1;
  baseUrl = env.base_url;
  items: IItem[] = [{} as IItem];
  biddings: IBidding[] = [{} as IBidding];
  viewDataHomes: IViewDataHome[] = [{} as IViewDataHome];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.viewDataHomes = this.getItemsAndBidding();
  }

  getItemsAndBidding() {
    let viewDataHomes: IViewDataHome[] = [];
    this.apiService.getData().itemList.subscribe((data: any) => {
      this.items = data;
      console.log("Items from api: ", this.items);

      for (const item of this.items) {
        this.apiService.getData({id: item.id}).biddingByItem.subscribe((bidding: IBidding) => {
          viewDataHomes.push(
            {
              id_item: item.id,
              id_bidding: bidding.id,
              imagePath: item.imagePath,
              name: item.name,
              description: item.description,
              lastBidding: bidding.biddingPrice,
              vendorName: item.vendorName,
            } as IViewDataHome);


        }, error => {
          viewDataHomes.push(
            {
              id_item: item.id,
              id_bidding: 0,
              imagePath: item.imagePath,
              name: item.name,
              description: item.description,
              lastBidding: 0,
              vendorName: item.vendorName,
            } as IViewDataHome);
        });
      }
      console.log("Bidding from api: ", this.biddings);
      console.log("ViewDataHomes: ", viewDataHomes);
    }, error => console.error("Get Item List", error));
    return viewDataHomes;
  }


}
