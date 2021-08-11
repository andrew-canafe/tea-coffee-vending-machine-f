import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerStatusComponent } from './component/container-status/container-status.component';
import { SaleAllDaysComponent } from './component/sale-all-days/sale-all-days.component';
import { SaleTodayComponent } from './component/sale-today/sale-today.component';
import { ContainerRefillComponent } from './component/container-refill/container-refill.component';
import { FormsModule } from '@angular/forms';
import { RefillCounterComponent } from './component/refill-counter/refill-counter.component';
import { DrinkComponent } from './component/drink/drink.component';
import { ReportComponent } from './component/report/report/report.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerStatusComponent,
    SaleAllDaysComponent,
    SaleTodayComponent,
    ContainerRefillComponent,
    RefillCounterComponent,
    DrinkComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
