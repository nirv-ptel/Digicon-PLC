import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPlcRoutingModule } from './register-plc-routing.module';
import { RegisterPlcComponent } from './register-plc.component';
import { ViewRegisterPlcComponent } from './view-register-plc/view-register-plc.component';
import { AddRegisterPlcComponent } from './add-register-plc/add-register-plc.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPaginationModule } from 'ngx-pagination';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbToggleModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterPlcComponent,
    ViewRegisterPlcComponent,
    AddRegisterPlcComponent
  ],
  imports: [
    CommonModule,
    RegisterPlcRoutingModule,
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
export class RegisterPlcModule { }
