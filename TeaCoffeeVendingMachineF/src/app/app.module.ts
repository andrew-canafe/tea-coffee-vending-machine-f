import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './component/container/container.component';
import { SaleAllDaysComponent } from './component/sale-all-days/sale-all-days.component';
import { SaleTodayComponent } from './component/sale-today/sale-today.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SaleAllDaysComponent,
    SaleTodayComponent
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
