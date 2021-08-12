import { Component, OnInit } from '@angular/core';
import { DrinkRow } from 'src/app/model/drink-row/drink-row';
import { HttpService } from 'src/app/service/http-service/http.service';

@Component({
  selector: 'app-drink',
  templateUrl: './choose-drink.component.html',
  styleUrls: ['./choose-drink.component.css']
})
export class ChooseDrinkComponent implements OnInit {

  drinkRows: DrinkRow[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getDrinkDetails();
  }

  getDrinkDetails(){
    this.httpService.getDrinkDetails().subscribe(data => {
      this.drinkRows = data;
    });
  }

  chooseDrink(cupAmnt:number, name:string){
    this.httpService.chooseDrink(cupAmnt,name).subscribe(data => {
      console.log(data);
    });
  }

}
