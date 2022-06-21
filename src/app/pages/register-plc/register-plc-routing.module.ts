import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRegisterPlcComponent } from './add-register-plc/add-register-plc.component';
import { RegisterPlcComponent } from './register-plc.component';
import { ViewRegisterPlcComponent } from './view-register-plc/view-register-plc.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterPlcComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-register-plc',
        pathMatch: 'full',
      },
      {
        path: 'add-register-plc',
        component: AddRegisterPlcComponent
      },
      {
        path: 'view-register-plc',
        component: ViewRegisterPlcComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPlcRoutingModule { }
