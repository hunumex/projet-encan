import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemUpdateComponent } from '../item-update/item-update.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  public idItem: number = 0;
  private httpClient: HttpClient;
  public items: item[] | undefined;
  @ViewChild(ItemUpdateComponent) itemUpdate: ItemUpdateComponent | undefined;

  constructor(http: HttpClient, private router: Router) {
    this.httpClient = http;
  }

  ngOnInit() {
    this.httpClient.get<item[]>('https://localhost:7138/api/item').subscribe(result => {
      this.items = result;
    }, error => { console.error(error) }
    );
    console.log(this.items);
  }

  deleteItem(id: number) {
    this.httpClient.delete(`https://localhost:7138/api/item/${id}`).
      subscribe(result => window.location.reload());
  }

  updateItem(id: number) {
    this.idItem = id;
    this.itemUpdate?.getItem(id);

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
