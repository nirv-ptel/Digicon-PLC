import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { MachineComponent } from './machine.component';
import { ViewMachineComponent } from './view-machine/view-machine.component';

const routes: Routes = [
  {
    path: '',
    component: MachineComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-machine',
        pathMatch: 'full',
      },
      {
        path: 'add-machine',
        component: AddMachineComponent
      },
      {
        path: 'view-machine',
        component: ViewMachineComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachineRoutingModule { }
