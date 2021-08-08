import { Component, OnInit } from '@angular/core';
import { ContainerRow } from 'src/app/model/container-row/container-row';
import { ContainerService } from 'src/app/service/container-service/container.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  containerRows: ContainerRow[] = [];

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.showContainerDetails();
  }

  showContainerDetails() {
    this.containerService.getContainerDetails().subscribe(data => {
      this.containerRows = data;
      //console.log(this.containers);
    });
  }

}
