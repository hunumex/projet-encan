import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemUpdateComponent } from '../item-update/item-update.component';
import { ApiService } from '../../../core/services/http.service'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  public idItem: number = 0;
  private httpClient: HttpClient;
  public items: any;
  @ViewChild(ItemUpdateComponent) itemUpdate: ItemUpdateComponent | undefined;

  constructor(http: HttpClient, private router: Router, private service: ApiService) {
    this.httpClient = http;
  }

  ngOnInit() {
    this.service.getData().itemList.subscribe(result => {
      this.items = result;
      console.log(result)
    }, error => { console.error(error) }

    );
  }

  deleteItem(id: number) {
    console.log(id)
    this.service.deleteData({id}).deleteItem.subscribe(result => window.location.reload());
  }



}
export interface item {
  id: any;
  name: string;
  imagePath: string ;
  price: number ;
  condition: boolean ;
  description: string ;
  available: boolean ;
  vendorName: string ;
  vendorEmail: string ;
  vendorPhone: string ;
  postingYear: Date ;
}
