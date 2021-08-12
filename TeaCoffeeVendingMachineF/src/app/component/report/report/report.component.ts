import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/service/container-service/container.service';
import { SaleService } from 'src/app/service/sale-service/sale-service.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private saleService: SaleService, private containerService: ContainerService) { }

  ngOnInit(): void {
  }

}
