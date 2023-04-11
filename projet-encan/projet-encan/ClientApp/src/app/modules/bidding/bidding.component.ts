import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../core/services/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Bidding} from "../../core/models/bidding.request";
import {env} from "../../../environments/env";

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {

itenId: number;
item!: any;
bidByItem: any = null;
client!: any;
validator: number = 0;
public baseUrl = env.base_url;

  constructor(private ApiService: ApiService, private route: ActivatedRoute, private routeNavigate: Router) {
    this.itenId = parseInt(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.ApiService.getData({id: this.itenId}).item.subscribe(data => { this.item = data; }, error => console.error(error));

    this.ApiService.getData({id: this.itenId}).biddingByItem.subscribe(data => {
      this.bidByItem = data;

      this.ApiService.getData({id: this.bidByItem.clientId}).client.subscribe(data => {
        this.client = data;
      }, error => console.error(error));

    }, error => console.error("Cet item n'a pas encore était enchéri."));

  }

  public bidding(){
    const firstname = document.querySelector('#firstName') as HTMLInputElement
    const lastname = document.querySelector('#lastname') as HTMLInputElement
    const email = document.querySelector('#email') as HTMLInputElement
    const phonenumber = document.querySelector('#phonenumber') as HTMLInputElement
    const bidprice = document.querySelector('#bidprice') as HTMLInputElement

    const bid = new Bidding
    (
      firstname.value,
      lastname.value,
      email.value,
      phonenumber.value,
      parseInt(bidprice.value),
      this.itenId
    );

    if(this.lastnameValidat() && this.firstnameValidat() && this.emailValidat() && this.phonenumberValidat() && this.bidpriceValidat()){
      this.ApiService.addData(bid).addBidding.subscribe(data => {
        console.log(data);
        this.routeNavigate.navigate([env.rout_url.home]);
      }, error => console.error(error));
    }
  }


  public clear(){
    const firstname = document.querySelector('#firstName') as HTMLInputElement
    const lastname = document.querySelector('#lastname') as HTMLInputElement
    const email = document.querySelector('#email') as HTMLInputElement
    const phonenumber = document.querySelector('#phonenumber') as HTMLInputElement
    const bidprice = document.querySelector('#bidprice') as HTMLInputElement

    firstname.value = "";
    lastname.value = "";
    email.value = "";
    phonenumber.value = "";
    bidprice.value = "";

    firstname.classList.remove('is-invalid');
    firstname.classList.remove('is-valid');

    lastname.classList.remove('is-invalid');
    lastname.classList.remove('is-valid');

    email.classList.remove('is-invalid');
    email.classList.remove('is-valid');

    phonenumber.classList.remove('is-invalid');
    phonenumber.classList.remove('is-valid');

    bidprice.classList.remove('is-invalid');
    bidprice.classList.remove('is-valid');
  }

  public firstnameValidat(){
    const firstname = document.querySelector('#firstName') as HTMLInputElement
    if (!firstname.value) {
      firstname.classList.add('is-invalid');
      return false;
    }else{
      firstname.classList.remove('is-invalid');
      firstname.classList.add('is-valid');
      return true;
    }
  }
  public lastnameValidat(){
    const lastname = document.querySelector('#lastname') as HTMLInputElement
    if (!lastname.value) {
      lastname.classList.add('is-invalid');
      return false;
    }else{
      lastname.classList.remove('is-invalid');
      lastname.classList.add('is-valid');
      return true;
  }
}
  public emailValidat(){
    const email = document.querySelector('#email') as HTMLInputElement
    if (!email.value && !email.validity.valid) {
      email.classList.add('is-invalid');
      return false;
    }else{
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
      return true;
    }
  }
  public phonenumberValidat(){
    const phonenumber = document.querySelector('#phonenumber') as HTMLInputElement
    if (!phonenumber.value) {
      phonenumber.classList.add('is-invalid');
      return false;
    }else{
      phonenumber.classList.remove('is-invalid');
      phonenumber.classList.add('is-valid');
      return true;
    }
  }
  public bidpriceValidat(){
    const bidprice = document.querySelector('#bidprice') as HTMLInputElement
    if (!bidprice.value) {
      bidprice.classList.add('is-invalid');
      return false;
    }else{
      if(this.bidByItem != null){
        console.log("bidding Price",this.bidByItem.biddingPrice);
        console.log("item price", this.item.price);
        if(parseInt(bidprice.value) <= this.bidByItem.biddingPrice){
          bidprice.classList.add('is-invalid');
          return false;
        }
        else{
          bidprice.classList.remove('is-invalid');
          bidprice.classList.add('is-valid');
          return true;
        }
      }else{
        if(parseInt(bidprice.value) <= this.item.price){
          bidprice.classList.add('is-invalid');
          return false;
        }
        bidprice.classList.remove('is-invalid');
        bidprice.classList.add('is-valid');
        return true
      }
    }

  }
}
