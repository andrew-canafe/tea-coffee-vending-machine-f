import { HttpClient, HttpHeaders } from '@angular/common/http';
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


const baseUrl: string = "http://localhost:8080/api";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }
  
  public getContainerDetails(): Observable<ContainerRow[]> {
    return this.httpClient.get<ContainerDetails>(`${baseUrl}/admin/container-details`).pipe(map(res => res.containerRowList));
  }

  public saveContainerDetails(body: ContainerDetails): Observable<string> {
    return this.httpClient.post<string>(`${baseUrl}/admin/container-details`, body);
  }

  public getRefillDetails(): Observable<RefillRow[]> {
    return this.httpClient.get<RefillDetails>(`${baseUrl}/admin/refill-details`).pipe(map(res => res.refillRowList));
  }

  public getSaleTodayDetails(): Observable<SaleRow[]> {
    return this.httpClient.get<SaleDetails>(`${baseUrl}/admin/total-sales`).pipe(map(res => res.saleRowList));
  }

  public getSaleAllDaysDetails(): Observable<SaleRow[]> {
    return this.httpClient.get<SaleDetails>(`${baseUrl}/admin/total-sales`).pipe(map(res => res.saleRowList));
  }

  public getDrinkDetails(): Observable<DrinkRow[]> {
    return this.httpClient.get<DrinkDetails>(`${baseUrl}/user/drink-details`).pipe(map(res => res.drinkRowList));
  }

  public chooseDrink(amt:number, drink:string): Observable<Sale> {
    return this.httpClient.get<Sale>(`${baseUrl}/user/choose-drink?amt=${amt}&drink=${drink}`);
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(`${baseUrl}/auth/signin`, {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.httpClient.post(`${baseUrl}/auth/signup`, {
      username,
      password
    }, httpOptions);
  }

}
