import { DrinkComponent } from "src/app/component/drink/drink.component";

export interface Sale {
    saleId:number;
    drink: {
        drinkId: number,
        name: string,
        cost: number,
        drinkIngedients: DrinkIngredient[]
    },
    numberOfCups: number,
    date: Date
}

export interface DrinkIngredient{
    quantity: number;
}
