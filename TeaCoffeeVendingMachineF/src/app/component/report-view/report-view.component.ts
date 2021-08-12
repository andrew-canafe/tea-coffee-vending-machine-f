import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/service/sale-service/sale-service.service';
@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
  }

}
