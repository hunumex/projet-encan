import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../core/services/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items!: any;

  constructor(private ApiService: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.ApiService.getData().itemList.subscribe(data => {
      console.log(data)
      this.items = data;
    }, error => console.error(error));
  }

}
