import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {env} from "../../../environments/env";

@Injectable({
  providedIn: 'root'
})

export class ApiService{

  constructor(private http: HttpClient) {}


  getData(data: any = {}) {
    return {
      biddingList: this.http.get(env.base_url + env.rout_url.bidding),
      bidding: this.http.get(env.base_url + env.rout_url.bidding + `/${data.id}`),
      biddingByItem: this.http.get(env.base_url + env.rout_url.biddingByItem + `/${data.id}`),
      clientList: this.http.get(env.base_url + env.rout_url.client),
      client: this.http.get(env.base_url + env.rout_url.client + `/${data.id}`),
      itemList: this.http.get(env.base_url + env.rout_url.item),
      item: this.http.get(env.base_url + env.rout_url.item + `/${data.id}`),
      rapportList: this.http.get(env.base_url + env.rout_url.rapport)
    };
  };

  deleteData(data: any = {}) {
    return {
      deleteBidding: this.http.delete(env.base_url + env.rout_url.bidding + `/${data.id}`),
      deleteClient: this.http.delete(env.base_url + env.rout_url.client + `/${data.id}`),
      deleteItem: this.http.delete(env.base_url + env.rout_url.item + `/${data.id}`),
    };
  };

  addData(data: any) {
    return {
      addBidding: this.http.post(env.base_url + env.rout_url.bidding_wc, data),
      addClient: this.http.post(env.base_url + env.rout_url.client, data),
      addItem: this.http.post(env.base_url + env.rout_url.item, data),
      login: this.http.post(env.base_url + env.rout_url.user, data),
    };
  };

  putData(data: any) {
    return {
      updateBidding: this.http.put(env.base_url + env.rout_url.bidding, data),
      updateClient: this.http.put(env.base_url + env.rout_url.client, data),
      updateItem: this.http.put(env.base_url + env.rout_url.item, data),
    };
  };
}
