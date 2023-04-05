// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const env = {
  production: false,
  base_url: "https://localhost:7138/api/",
  rout_url:{
    home: "",
    login: "login",
    user: "user",
    item: "item",
    bidding: "bidding",
    bidding_wc: "bidding/wc",
    biddingByItem: "bidding/item",
    item_add: "item-add",
    item_update: "item-update",
    client: "client",
    rapport: "rapport",
    contact: "contact",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
