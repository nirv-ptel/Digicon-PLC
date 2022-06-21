import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyPlcComponent } from './add-company-plc/add-company-plc.component';
import { CompanyPlcComponent } from './company-plc.component';
import { ViewCompanyPlcComponent } from './view-company-plc/view-company-plc.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyPlcComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-company-plc',
        pathMatch: 'full',
      },
      {
        path: 'add-company-plc',
        component: AddCompanyPlcComponent
      },
      {
        path: 'view-company-plc',
        component: ViewCompanyPlcComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyPlcRoutingModule { }
