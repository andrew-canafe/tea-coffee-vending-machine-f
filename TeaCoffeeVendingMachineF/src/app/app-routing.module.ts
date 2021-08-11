import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerStatusComponent } from './component/container-status/container-status.component';
import { ContainerRefillComponent } from './component/container-refill/container-refill.component';
import { RefillCounterComponent } from './component/refill-counter/refill-counter.component';
import { ChooseDrinkComponent } from './component/choose-drink/choose-drink.component';
import { ReportViewComponent } from './component/report-view/report-view/report-view.component';
import { SaleAllDaysComponent } from './component/sale-all-days/sale-all-days.component';
import { SaleTodayComponent } from './component/sale-today/sale-today.component';

const routes: Routes = [
  { path: 'container-status', component: ContainerStatusComponent},
  { path: 'container-refill', component: ContainerRefillComponent},
  { path: 'refill-counter', component: RefillCounterComponent},
  { path: 'total-sales/all-days' , component: SaleAllDaysComponent},
  { path: 'total-sales/today', component: SaleTodayComponent},
  { path: 'choose-drink', component: ChooseDrinkComponent},
  { path: 'report-view', component: ReportViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
