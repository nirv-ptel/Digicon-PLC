import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'company',
      loadChildren: () => import('./company/company.module')
        .then(m => m.CompanyModule),
    },
    {
      path: 'user',
      loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule),
    },
    {
      path: 'machine',
      loadChildren: () => import('./machine/machine.module')
        .then(m => m.MachineModule),
    },
    {
      path: 'company-plc',
      loadChildren: () => import('./company-plc/company-plc.module')
        .then(m => m.CompanyPlcModule),
    },
    {
      path: 'customer-plc',
      loadChildren: () => import('./customer-plc/customer-plc.module')
        .then(m => m.CustomerPlcModule),
    },
    {
      path: 'method-plc',
      loadChildren: () => import('./method-plc/method-plc.module')
        .then(m => m.MethodPlcModule),
    },
    {
      path: 'register-plc',
      loadChildren: () => import('./register-plc/register-plc.module')
        .then(m => m.RegisterPlcModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'dashboard',
    },
  ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
