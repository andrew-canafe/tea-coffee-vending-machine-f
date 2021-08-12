import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SaleDetails } from 'src/app/model/sale-details/sale-details';
import { DrinkDetails } from 'src/app/model/drink-details/drink-details';
import { SaleRow } from 'src/app/model/sale-row/sale-row';
import { DrinkRow } from 'src/app/model/drink-row/drink-row';
import { Sale } from 'src/app/model/sale/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private baseUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public getSaleTodayDetails(): Observable<SaleRow[]> {
    return this.httpClient.get<SaleDetails>(`${this.baseUrl}/api/total-sales`).pipe(map(res => res.saleRowList));
  }

  public getSaleAllDaysDetails(): Observable<SaleRow[]> {
    return this.httpClient.get<SaleDetails>(`${this.baseUrl}/api/total-sales`).pipe(map(res => res.saleRowList));
  }

  public getDrinkDetails(): Observable<DrinkRow[]> {
    return this.httpClient.get<DrinkDetails>(`${this.baseUrl}/api/drink-details`).pipe(map(res => res.drinkRowList));
  }
  public chooseDrink(amt:number, drink:string): Observable<Sale> {
    return this.httpClient.get<Sale>(`${this.baseUrl}/api/choose-drink?amt=${amt}&drink=${drink}`);
  }
}
