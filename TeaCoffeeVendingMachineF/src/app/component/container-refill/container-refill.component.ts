import { Component, OnInit } from '@angular/core';
import { ContainerRow } from 'src/app/model/container-row/container-row';
import { ContainerDetails } from 'src/app/model/container-details/container-details';
import { ContainerService } from 'src/app/service/container-service/container.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-refill',
  templateUrl: './container-refill.component.html',
  styleUrls: ['./container-refill.component.css']
})
export class ContainerRefillComponent implements OnInit {

  public containerRows: ContainerRow[] = [];

  constructor(private containerService: ContainerService, private router: Router) { }

  ngOnInit(): void {
    this.showContainerDetails();
  }

  showContainerDetails() {
    this.containerService.getContainerDetails().subscribe(data => {
      this.containerRows = data;
    });
  }

  saveContainerDetails() {
    let body: ContainerDetails = {containerRowList: this.containerRows};
    this.containerService.saveContainerDetails(body).subscribe(data => {
      console.log(data);
    });
  }

  reloadCurrentRoute() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([this.router.url]);
    });
  }

}
