import { Component, NgZone, OnInit } from '@angular/core';
import { ContainerRow } from 'src/app/model/container-row/container-row';
import { ContainerDetails } from 'src/app/model/container-details/container-details';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http-service/http.service';

@Component({
  selector: 'app-container-refill',
  templateUrl: './container-refill.component.html',
  styleUrls: ['./container-refill.component.css']
})
export class ContainerRefillComponent implements OnInit {

  public containerRows: ContainerRow[] = [];
  public refillSuccessful: boolean;

  constructor(private httpService: HttpService, private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.showContainerDetails();
  }

  showContainerDetails() {
    this.httpService.getContainerDetails().subscribe(data => {
      this.ngZone.run(() => {
        this.containerRows = data;
      });
    });
  }

  saveContainerDetails() {
    let body: ContainerDetails = {containerRowList: this.containerRows};
    this.httpService.saveContainerDetails(body).subscribe(data => {
      console.log(data);
      this.refillSuccessful = true;

      this.showContainerDetails();
    }, err => {
      this.refillSuccessful = false;
    });
  }

}
