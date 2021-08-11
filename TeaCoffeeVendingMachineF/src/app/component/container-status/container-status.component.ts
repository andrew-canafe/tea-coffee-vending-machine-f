import { Component, OnInit } from '@angular/core';
import { ContainerRow } from 'src/app/model/container-row/container-row';
import { ContainerService } from 'src/app/service/container-service/container.service';

@Component({
  selector: 'app-container-status',
  templateUrl: './container-status.component.html',
  styleUrls: ['./container-status.component.css']
})
export class ContainerStatusComponent implements OnInit {

  containerRows: ContainerRow[] = [];

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.showContainerDetails();
  }

  showContainerDetails() {
    this.containerService.getContainerDetails().subscribe(data => {
      this.containerRows = data;
    });
  }

}
