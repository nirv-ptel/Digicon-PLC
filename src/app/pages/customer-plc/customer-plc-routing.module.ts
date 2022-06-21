import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerPlcComponent } from './add-customer-plc/add-customer-plc.component';
import { CustomerPlcComponent } from './customer-plc.component';
import { ViewCustomerPlcComponent } from './view-customer-plc/view-customer-plc.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerPlcComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-customer-plc',
        pathMatch: 'full',
      },
      {
        path: 'add-customer-plc',
        component: AddCustomerPlcComponent
      },
      {
        path: 'view-customer-plc',
        component: ViewCustomerPlcComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerPlcRoutingModule { }
