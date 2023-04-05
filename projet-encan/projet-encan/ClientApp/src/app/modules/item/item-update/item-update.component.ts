import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { item } from '../item-list/item-list.component';
@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {

  private httpClient: HttpClient;
  private activeRoute: ActivatedRoute;
  public showImageInput = false;
  public item: item | any;
  public router: Router;
  private idItem!: number;
  constructor(router: Router, http: HttpClient, activeRoute: ActivatedRoute) {
    this.router = router;
    this.httpClient = http;
    this.activeRoute = activeRoute;
  }
  public ngOnInit() {
    this.idItem = parseInt(this.activeRoute.snapshot.params['id']);
    console.log(this.idItem);
    this.httpClient.get<item>(`https://localhost:7138/api/item/${this.idItem}`).subscribe(result => {
      this.item = result;
      console.log(result)
    }, error => { console.error(error) }
    );
  }

  save() {
    if (this.item != undefined) {

      this.item.available = this.item.available == "true" ? true : false;
      this.item.condition = this.item.condition == "true" ? true : false;
      console.log(this.item);
      if (this.showImageInput) {
        this.onUpload();
      } else {
        this.httpClient.put(`https://localhost:7138/api/item`, this.item).
          subscribe(result => this.router.navigate(['item']));
      }

    }
  }

  onFileSelected(event: Event) {
    const element = event.target as HTMLInputElement;
    this.item.imagePath = element.files?.[0];
    console.log(this.item.imagePath)
  }
  onUpload() {
    if (!this.item.imagePath) {
      console.error('Aucun fichier sélectionné');
      return;
    }

    const formData = new FormData();
    formData.append('imagePath', this.item.imagePath);
    formData.append('name', this.item.name);
    formData.append('id', this.idItem.toString());
    formData.append('price', this.item.price.toString());
    formData.append('description', this.item.description);
    formData.append('condition', this.item.condition);
    formData.append('vendorName', this.item.vendorName);
    formData.append('vendorEmail', this.item.vendorEmail);
    formData.append('vendorPhone', this.item.vendorPhone);

    //  this.service.addData(this.item).addItem.subscribe(result => window.location.reload());
    this.httpClient.put('https://localhost:7138/api/item/putImage', formData).subscribe(response => {
      console.log('Image téléchargée avec succès !', response);
    }, error => {
      console.error('Erreur lors du téléchargement de l\'image', error);
    });
  }
}
