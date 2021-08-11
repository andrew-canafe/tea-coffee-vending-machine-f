import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './component/container/container.component';
import { DrinkComponent } from './component/drink/drink.component';
import { ReportComponent } from './component/report/report/report.component';
import { SaleAllDaysComponent } from './component/sale-all-days/sale-all-days.component';
import { SaleTodayComponent } from './component/sale-today/sale-today.component';

const routes: Routes = [
  { path: 'container-details', component: ContainerComponent},
  { path: 'total-sales/all-days' , component: SaleAllDaysComponent},
  { path: 'total-sales/today', component: SaleTodayComponent},
  { path: 'choose-drink', component: DrinkComponent},
  { path: 'report-page', component: ReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
