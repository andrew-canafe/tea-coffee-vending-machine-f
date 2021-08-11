import { Component, OnInit } from '@angular/core';
import { SaleRow } from 'src/app/model/sale-row/sale-row';
import { SaleService } from 'src/app/service/sale-service/sale-service.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
  }

}
