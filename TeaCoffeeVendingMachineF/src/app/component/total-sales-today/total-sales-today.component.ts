import { Component, OnInit } from '@angular/core';
import { SaleRow } from 'src/app/model/sale-row/sale-row'; 
import { SaleService } from 'src/app/service/sale-service/sale-service.service';

@Component({
  selector: 'app-total-sales-today',
  templateUrl: './total-sales-today.component.html',
  styleUrls: ['./total-sales-today.component.css']
})
export class TotalSalesTodayComponent implements OnInit {

  saleRows: SaleRow[] = [];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.showSaleTodayDetails();
  }

  showSaleTodayDetails() {
    this.saleService.getSaleTodayDetails().subscribe(data => {
      this.saleRows = data;
      console.log(data);
    });
  }

}
