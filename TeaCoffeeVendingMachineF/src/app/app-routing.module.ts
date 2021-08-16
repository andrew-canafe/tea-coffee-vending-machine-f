import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerStatusComponent } from './component/container-status/container-status.component';
import { ContainerRefillComponent } from './component/container-refill/container-refill.component';
import { RefillCounterComponent } from './component/refill-counter/refill-counter.component';
import { ChooseDrinkComponent } from './component/choose-drink/choose-drink.component';
import { ReportViewComponent } from './component/report-view/report-view.component';
import { TotalSalesAllDaysComponent } from './component/total-sales-all-days/total-sales-all-days.component';
import { TotalSalesTodayComponent } from './component/total-sales-today/total-sales-today.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AboutUsComponent } from './component/about-us/about-us.component';

const routes: Routes = [
  { path: 'choose-drink', component: ChooseDrinkComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'report-view', component: ReportViewComponent},
  { path: 'total-sales-today', component: TotalSalesTodayComponent},
  { path: 'total-sales-all-days' , component: TotalSalesAllDaysComponent},
  { path: 'refill-counter', component: RefillCounterComponent},
  { path: 'container-refill', component: ContainerRefillComponent},
  { path: 'container-status', component: ContainerStatusComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/choose-drink', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
