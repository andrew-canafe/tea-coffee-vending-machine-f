import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerStatusComponent } from './component/container-status/container-status.component';
import { TotalSalesAllDaysComponent } from './component/total-sales-all-days/total-sales-all-days.component';
import { TotalSalesTodayComponent } from './component/total-sales-today/total-sales-today.component';
import { ContainerRefillComponent } from './component/container-refill/container-refill.component';
import { FormsModule } from '@angular/forms';
import { RefillCounterComponent } from './component/refill-counter/refill-counter.component';
import { ChooseDrinkComponent } from './component/choose-drink/choose-drink.component';
import { ReportViewComponent } from './component/report-view/report-view.component';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerStatusComponent,
    TotalSalesAllDaysComponent,
    TotalSalesTodayComponent,
    ContainerRefillComponent,
    RefillCounterComponent,
    ChooseDrinkComponent,
    ReportViewComponent,
    NavigationBarComponent
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
