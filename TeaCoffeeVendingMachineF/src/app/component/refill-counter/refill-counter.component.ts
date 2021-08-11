import { Component, OnInit } from '@angular/core';
import { RefillRow } from 'src/app/model/refill-row/refill-row';
import { ContainerService } from 'src/app/service/container-service/container.service';

@Component({
  selector: 'app-refill-counter',
  templateUrl: './refill-counter.component.html',
  styleUrls: ['./refill-counter.component.css']
})
export class RefillCounterComponent implements OnInit {

  refillRows: RefillRow[] = [];

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.showContainerDetails();
  }

  showContainerDetails() {
    this.containerService.getRefillDetails().subscribe(data => {
      this.refillRows = data;
    });
  }

}
