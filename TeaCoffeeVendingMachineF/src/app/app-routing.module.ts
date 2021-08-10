import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './component/container/container.component';
import { SaleAllDaysComponent } from './component/sale-all-days/sale-all-days.component';
import { SaleTodayComponent } from './component/sale-today/sale-today.component';

const routes: Routes = [
  { path: 'container-details', component: ContainerComponent},
  { path: 'total-sales/all-days' , component: SaleAllDaysComponent},
  { path: 'total-sales/today', component: SaleTodayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
