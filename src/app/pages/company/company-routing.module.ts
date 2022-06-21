import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyComponent } from './company.component';
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
