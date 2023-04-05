import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { item } from '../item-list/item-list.component';
import {env} from "../../../../environments/env";
@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {

  private httpClient: HttpClient;
  private activeRoute: ActivatedRoute;
  public item: item | undefined;
  public router: Router;
  constructor(router: Router, http: HttpClient, activeRoute: ActivatedRoute) {
    this.router = router;
    this.httpClient = http;
    this.activeRoute = activeRoute;
  }
  public ngOnInit() {
     let id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.httpClient.get<item>(`https://localhost:7138/api/item/${id}`).subscribe(result => {
      this.item = result;
      console.log(result)
    }, error => { console.error(error) }
    );
  }

  save() {
    if (this.item != undefined) {
      this.httpClient.put(`https://localhost:7138/api/item`, this.item).
        subscribe(result => this.router.navigateByUrl(env.rout_url.item), error => console.error(error));
    }
  }
}
