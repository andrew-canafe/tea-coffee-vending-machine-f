import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SaleDetails } from 'src/app/model/sale-details/sale-details';
import { SaleRow } from 'src/app/model/sale-row/sale-row';

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
}
