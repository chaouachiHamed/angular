import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';

const routes: Routes = [

  {
    path: 'billing',  component: BillingComponent,

  },

  {
    path: 'billing/:ID',  component: BillingDetailsComponent,

  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
