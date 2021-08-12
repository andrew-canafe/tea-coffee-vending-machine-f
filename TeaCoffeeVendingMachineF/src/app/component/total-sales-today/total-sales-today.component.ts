import { Component, OnInit } from '@angular/core';
import { SaleRow } from 'src/app/model/sale-row/sale-row'; 
import { HttpService } from 'src/app/service/http-service/http.service';

@Component({
  selector: 'app-total-sales-today',
  templateUrl: './total-sales-today.component.html',
  styleUrls: ['./total-sales-today.component.css']
})
export class TotalSalesTodayComponent implements OnInit {

  saleRows: SaleRow[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.showSaleTodayDetails();
  }

  showSaleTodayDetails() {
    this.httpService.getSaleTodayDetails().subscribe(data => {
      this.saleRows = data;
    });
  }

}
