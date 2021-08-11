import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContainerDetails } from 'src/app/model/container-details/container-details';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ContainerRow } from 'src/app/model/container-row/container-row';
import { RefillDetails } from 'src/app/model/refill-details/refill-details';
import { RefillRow } from 'src/app/model/refill-row/refill-row';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  private baseUrl: string = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) {

  }

  public getContainerDetails(): Observable<ContainerRow[]> {
    return this.httpClient.get<ContainerDetails>(`${this.baseUrl}/container-details`).pipe(map(res => res.containerRowList));
  }

  public saveContainerDetails(body: ContainerDetails): Observable<string> {
    return this.httpClient.post<string>(`${this.baseUrl}/container-details`, body);
  }

  public getRefillDetails(): Observable<RefillRow[]> {
    return this.httpClient.get<RefillDetails>(`${this.baseUrl}/refill-details`).pipe(map(res => res.refillRowList));
  }

}