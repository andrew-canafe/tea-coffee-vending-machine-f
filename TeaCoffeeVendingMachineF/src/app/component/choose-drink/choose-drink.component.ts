import { Component, OnInit } from '@angular/core';
import { DrinkRow } from 'src/app/model/drink-row/drink-row';
import { SaleService } from 'src/app/service/sale-service/sale-service.service';

@Component({
  selector: 'app-drink',
  templateUrl: './choose-drink.component.html',
  styleUrls: ['./choose-drink.component.css']
})
export class ChooseDrinkComponent implements OnInit {

  drinkRows: DrinkRow[] = [];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.getDrinkDetails();
  }

  getDrinkDetails(){
    this.saleService.getDrinkDetails().subscribe(data => {
      this.drinkRows = data;
    });
  }

  chooseDrink(cupAmnt:number, name:string){
    this.saleService.chooseDrink(cupAmnt,name).subscribe(data => {
      console.log(data);
    });
  }

}
