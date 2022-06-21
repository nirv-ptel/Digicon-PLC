import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineRoutingModule } from './machine-routing.module';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { ViewMachineComponent } from './view-machine/view-machine.component';
import { MachineComponent } from './machine.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPaginationModule } from 'ngx-pagination';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbToggleModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddMachineComponent,
    ViewMachineComponent,
    MachineComponent
  ],
  imports: [
    CommonModule,
    MachineRoutingModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    Ng2SmartTableModule,
    NgxPaginationModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbToggleModule,
    NbSelectModule,
    NbIconModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbStepperModule,
    FormsModule,
    ReactiveFormsModule,
    NbTabsetModule,
    NbDialogModule.forChild(),
  ]
})
export class MachineModule { }
