import { Component, OnInit } from '@angular/core';
import { SaleRow } from 'src/app/model/sale-row/sale-row';
import { SaleService } from 'src/app/service/sale-service/sale-service.service';
@Component({
  selector: 'app-report',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
  }

}
