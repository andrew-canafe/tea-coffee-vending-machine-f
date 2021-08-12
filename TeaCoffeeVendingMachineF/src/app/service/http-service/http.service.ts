import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContainerDetails } from 'src/app/model/container-details/container-details';
import { ContainerRow } from 'src/app/model/container-row/container-row';
import { DrinkDetails } from 'src/app/model/drink-details/drink-details';
import { DrinkRow } from 'src/app/model/drink-row/drink-row';
import { RefillDetails } from 'src/app/model/refill-details/refill-details';
import { RefillRow } from 'src/app/model/refill-row/refill-row';
import { SaleDetails } from 'src/app/model/sale-details/sale-details';
import { SaleRow } from 'src/app/model/sale-row/sale-row';
import { Sale } from 'src/app/model/sale/sale';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }
  
  public getContainerDetails(): Observable<ContainerRow[]> {
    return this.httpClient.get<ContainerDetails>(`${this.baseUrl}/container-details`).pipe(map(res => res.containerRowList));
  }

  public saveContainerDetails(body: ContainerDetails): Observable<string> {
    return this.httpClient.post<string>(`${this.baseUrl}/container-details`, body);
  }

  public getRefillDetails(): Observable<RefillRow[]> {
    return this.httpClient.get<RefillDetails>(`${this.baseUrl}/refill-details`).pipe(map(res => res.refillRowList));
  }

  public getSaleTodayDetails(): Observable<SaleRow[]> {
    return this.httpClient.get<SaleDetails>(`${this.baseUrl}/total-sales`).pipe(map(res => res.saleRowList));
  }

  public getSaleAllDaysDetails(): Observable<SaleRow[]> {
    return this.httpClient.get<SaleDetails>(`${this.baseUrl}/total-sales`).pipe(map(res => res.saleRowList));
  }

  public getDrinkDetails(): Observable<DrinkRow[]> {
    return this.httpClient.get<DrinkDetails>(`${this.baseUrl}/drink-details`).pipe(map(res => res.drinkRowList));
  }

  public chooseDrink(amt:number, drink:string): Observable<Sale> {
    return this.httpClient.get<Sale>(`${this.baseUrl}/choose-drink?amt=${amt}&drink=${drink}`);
  }

}
