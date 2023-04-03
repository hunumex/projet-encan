import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {

  private httpClient: HttpClient;
  private activeRoute: ActivatedRoute;
  public item: item = new item();
  public router: Router;

  constructor(router: Router, http: HttpClient, activeRoute: ActivatedRoute) {
    this.router = router;
    this.httpClient = http;
    this.activeRoute = activeRoute;
  }
  addItem() {
    this.httpClient.post(`https://localhost:7138/api/item`, this.item).
      subscribe(result => window.location.reload());
  }
}
export class item {

  name: string = null!;
  imagePath: string = null!;
  price: number = null!;
  condition: boolean = null!;
  description: string = null!;
  available: boolean = null!;
  vendorName: string = null!;
  vendorEmail: string = null!;
  vendorPhone: string = null!;
  postingYear: Date = null!;

} 

