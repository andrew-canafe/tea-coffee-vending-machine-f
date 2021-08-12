import { Component, OnInit } from '@angular/core';
import { RefillRow } from 'src/app/model/refill-row/refill-row';
import { HttpService } from 'src/app/service/http-service/http.service';

@Component({
  selector: 'app-refill-counter',
  templateUrl: './refill-counter.component.html',
  styleUrls: ['./refill-counter.component.css']
})
export class RefillCounterComponent implements OnInit {

  refillRows: RefillRow[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.showContainerDetails();
  }

  showContainerDetails() {
    this.httpService.getRefillDetails().subscribe(data => {
      this.refillRows = data;
    });
  }

}
