export interface IViewDataHome{
  id_item: number;
  id_bidding: number;
  imagePath: string;
  name: string;
  description: string | "No description";
  lastBidding: number;
  vendorName: string;
}
