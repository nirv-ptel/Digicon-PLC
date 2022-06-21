import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMethodPlcComponent } from './add-method-plc/add-method-plc.component';
import { MethodPlcComponent } from './method-plc.component';
import { ViewMethodPlcComponent } from './view-method-plc/view-method-plc.component';

const routes: Routes = [
  {
    path: '',
    component: MethodPlcComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-method-plc',
        pathMatch: 'full',
      },
      {
        path: 'add-method-plc',
        component: AddMethodPlcComponent
      },
      {
        path: 'view-method-plc',
        component: ViewMethodPlcComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MethodPlcRoutingModule { }
