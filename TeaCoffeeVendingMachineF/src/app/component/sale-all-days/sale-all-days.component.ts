import { Component, OnInit } from '@angular/core';
import { SaleRow } from 'src/app/model/sale-row/sale-row'; 
import { SaleService } from 'src/app/service/sale-service/sale-service.service';

@Component({
  selector: 'app-sale-all-days',
  templateUrl: './sale-all-days.component.html',
  styleUrls: ['./sale-all-days.component.css']
})
export class SaleAllDaysComponent implements OnInit {
  
  saleRows: SaleRow[] = [];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.showSaleAllDaysDetails();
  }

  showSaleAllDaysDetails() {
    this.saleService.getSaleAllDaysDetails().subscribe(data => {
      this.saleRows = data;
    });
  }
}
