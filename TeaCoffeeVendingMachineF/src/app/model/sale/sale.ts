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
