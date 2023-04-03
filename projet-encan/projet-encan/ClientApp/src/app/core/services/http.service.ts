import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ApiService{

  constructor(private http: HttpClient) {}

  getData(data: any = {}) {
    return {
      biddingList: this.http.get(environment.url + `bidding`),
      bidding: this.http.get(environment.url + `bidding/${data.id}`),
      biddingByItem: this.http.get(environment.url + `bidding/item/${data.id}`),
      clientList: this.http.get(environment.url + `client`),
      client: this.http.get(environment.url + `client/${data.id}`),
      itemList: this.http.get(environment.url + `item`),
      item: this.http.get(environment.url + `item/${data.id}`),
    };
  };

  deleteData(data: any = {}) {
    return {
      deleteBidding: this.http.delete(environment.url + `bidding/${data.id}`),
      deleteClient: this.http.delete(environment.url + `client/${data.id}`),
      deleteItem: this.http.delete(environment.url + `item/${data.id}`),
    };
  };

  addData(data: any) {
    return {
      addBidding: this.http.post(environment.url + `bidding/wc`, data),
      addClient: this.http.post(environment.url + `client/`, data),
      addItem: this.http.post(environment.url + `item/`, data),
      login: this.http.post(`https://localhost:7138/user/`, data),
    };
  };

  putData(data: any) {
    return {
      updateBidding: this.http.put(environment.url + `bidding/`, data),
      updateClient: this.http.put(environment.url + `client/`, data),
      updateItem: this.http.put(environment.url + `item/`, data),
    };
  };
}
