import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './component/container/container.component';
import { SaleAllDaysComponent } from './component/sale-all-days/sale-all-days.component';
import { SaleTodayComponent } from './component/sale-today/sale-today.component';
import { DrinkComponent } from './component/drink/drink.component';
import { ReportComponent } from './component/report/report/report.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SaleAllDaysComponent,
    SaleTodayComponent,
    DrinkComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
