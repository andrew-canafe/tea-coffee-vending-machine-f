import { Component, OnInit } from '@angular/core';
import { SaleRow } from 'src/app/model/sale-row/sale-row'; 
import { SaleService } from 'src/app/service/sale-service/sale-service.service';

@Component({
  selector: 'app-sale-today',
  templateUrl: './sale-today.component.html',
  styleUrls: ['./sale-today.component.css']
})
export class SaleTodayComponent implements OnInit {

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
