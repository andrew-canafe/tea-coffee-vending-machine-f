import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContainerDetails } from 'src/app/model/container-details/container-details';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ContainerRow } from 'src/app/model/container-row/container-row';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  private baseUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {

  }

  public getContainerDetails(): Observable<ContainerRow[]> {
    //this.httpClient.get(baseUrl+"/api/container-details")
    return this.httpClient.get<ContainerDetails>(`${this.baseUrl}/api/container-details`).pipe(map(res => res.containerRowList));
  }

}