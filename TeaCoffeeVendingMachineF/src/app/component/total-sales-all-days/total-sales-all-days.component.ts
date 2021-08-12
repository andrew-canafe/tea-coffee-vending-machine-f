import { Component, OnInit } from '@angular/core';
import { SaleRow } from 'src/app/model/sale-row/sale-row'; 
import { HttpService } from 'src/app/service/http-service/http.service';

@Component({
  selector: 'app-total-sales-all-days',
  templateUrl: './total-sales-all-days.component.html',
  styleUrls: ['./total-sales-all-days.component.css']
})
export class TotalSalesAllDaysComponent implements OnInit {
  
  saleRows: SaleRow[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.showSaleAllDaysDetails();
  }

  showSaleAllDaysDetails() {
    this.httpService.getSaleAllDaysDetails().subscribe(data => {
      this.saleRows = data;
    });
  }
}
