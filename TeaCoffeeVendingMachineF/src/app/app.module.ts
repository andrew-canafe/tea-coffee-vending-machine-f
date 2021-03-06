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
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { authInterceptorProviders } from './interceptor/auth-interceptor/auth-interceptor';
import { AboutUsComponent } from './component/about-us/about-us.component';

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
    RegisterComponent,
    LoginComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
