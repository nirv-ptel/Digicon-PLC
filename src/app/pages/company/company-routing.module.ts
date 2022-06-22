import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyUserComponent } from './company-user/company-user.component';
import { CompanyComponent } from './company.component';
import { OneCompanyComponent } from './one-company/one-company.component';
import { ViewCompanyComponent } from './view-company/view-company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-company',
        pathMatch: 'full',
      },
      {
        path: 'add-company',
        component: AddCompanyComponent
      },
      {
        path: 'view-company',
        component: ViewCompanyComponent
      },
      {
        path: 'one-company/:id',
        component: OneCompanyComponent,
        children: [
          {
            path: '',
            redirectTo: 'company-details',
            pathMatch: 'full',
          },
          {
            path: 'company-details',
            component: CompanyDetailsComponent
          },
          {
            path: 'company-user',
            component: CompanyUserComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
