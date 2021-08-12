import { Component, OnInit } from '@angular/core';
import { ContainerRow } from 'src/app/model/container-row/container-row';
import { HttpService } from 'src/app/service/http-service/http.service';

@Component({
  selector: 'app-container-status',
  templateUrl: './container-status.component.html',
  styleUrls: ['./container-status.component.css']
})
export class ContainerStatusComponent implements OnInit {

  containerRows: ContainerRow[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.showContainerDetails();
  }

  showContainerDetails() {
    this.httpService.getContainerDetails().subscribe(data => {
      this.containerRows = data;
    });
  }

}
