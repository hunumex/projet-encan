import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../core/services/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Bidding} from "../../core/models/bidding.request";
import {Item} from "../../core/models/item.request";

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {

itenId: number;
item!: any;
bidByItem!: any;
client!: any;

  constructor(private ApiService: ApiService, private route: ActivatedRoute, private routeNavigate: Router) {
    this.itenId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.ApiService.getData({id: this.itenId}).item.subscribe(data => { this.item = data; }, error => console.error(error));

    this.ApiService.getData({id: this.itenId}).biddingByItem.subscribe(data => {
      console.log(data);
      this.bidByItem = data;

      this.ApiService.getData({id: this.bidByItem.clientId}).client.subscribe(data => {
        console.log(data);
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

    this.firstnameValidat();
    this.lastnameValidat();
    this.emailValidat();
    this.phonenumberValidat();
    this.bidpriceValidat();

    const bid = new Bidding
    (
      firstname.value,
      lastname.value,
      email.value,
      phonenumber.value,
      parseInt(bidprice.value),
    );
    console.log(bid);
    this.ApiService.addData({
      firstName: firstname.value,
      lastName: lastname.value,
      email: email.value,
      phoneNumber: phonenumber.value,
      biddingPtice: parseInt(bidprice.value),
    }).addBidding.subscribe(data => {
      console.log("Bidding effectue");
      console.log(data);
      console.log("rout1");
      this.routeNavigate.navigate(['/home']);
      console.log("rout2");
    });

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
      return;
    }else{
      firstname.classList.remove('is-invalid');
      firstname.classList.add('is-valid');
    }
  }
  public lastnameValidat(){
    const lastname = document.querySelector('#lastname') as HTMLInputElement
    if (!lastname.value) {
      lastname.classList.add('is-invalid');
      return;
    }else{
      lastname.classList.remove('is-invalid');
      lastname.classList.add('is-valid');
  }
}
  public emailValidat(){
    const email = document.querySelector('#email') as HTMLInputElement
    if (!email.value) {
      email.classList.add('is-invalid');
      return;
    }else{
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    }
    if (!email.validity.valid) {
      email.classList.add('is-invalid');
      return;
    }else{
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    }
  }
  public phonenumberValidat(){
    const phonenumber = document.querySelector('#phonenumber') as HTMLInputElement
    if (!phonenumber.value) {
      phonenumber.classList.add('is-invalid');
      return;
    }else{
      phonenumber.classList.remove('is-invalid');
      phonenumber.classList.add('is-valid');
    }
  }
  public bidpriceValidat(){
    const bidprice = document.querySelector('#bidprice') as HTMLInputElement
    if (!bidprice.value) {
      bidprice.classList.add('is-invalid');
      return;
    }else{
      bidprice.classList.remove('is-invalid');
      bidprice.classList.add('is-valid');
    }
    if(this.bidByItem.biddingPrice){
      if(parseInt(bidprice.value) <= this.bidByItem.biddingPrice){
        bidprice.classList.add('is-invalid');
        return;
      }
      else{
        bidprice.classList.remove('is-invalid');
        bidprice.classList.add('is-valid');
      }
    }
  }
}
