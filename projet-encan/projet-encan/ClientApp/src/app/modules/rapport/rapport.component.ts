import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {

  rapports!: any;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getData().rapportList.subscribe(data => {
      this.rapports = data
    })
  }

  public print() {
    const table = document.querySelector(".table") as HTMLTableElement;
    const printWindow = window.open("", "", "width=800,height=600") || window;
    printWindow.document.write("<html><head><style>table {width: 100%; border: 1px solid} th, td{border: 1px solid; padding: 5px}</style></head><body>");
    printWindow.document.write(table.outerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();

  }

}
