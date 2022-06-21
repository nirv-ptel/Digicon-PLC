import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPlcRoutingModule } from './customer-plc-routing.module';
import { CustomerPlcComponent } from './customer-plc.component';
import { ViewCustomerPlcComponent } from './view-customer-plc/view-customer-plc.component';
import { AddCustomerPlcComponent } from './add-customer-plc/add-customer-plc.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPaginationModule } from 'ngx-pagination';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbToggleModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerPlcComponent,
    ViewCustomerPlcComponent,
    AddCustomerPlcComponent
  ],
  imports: [
    CommonModule,
    CustomerPlcRoutingModule,
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
export class CustomerPlcModule { }
