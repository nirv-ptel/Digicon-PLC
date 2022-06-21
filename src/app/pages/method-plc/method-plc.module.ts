import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MethodPlcRoutingModule } from './method-plc-routing.module';
import { MethodPlcComponent } from './method-plc.component';
import { AddMethodPlcComponent } from './add-method-plc/add-method-plc.component';
import { ViewMethodPlcComponent } from './view-method-plc/view-method-plc.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPaginationModule } from 'ngx-pagination';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbToggleModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MethodPlcComponent,
    AddMethodPlcComponent,
    ViewMethodPlcComponent
  ],
  imports: [
    CommonModule,
    MethodPlcRoutingModule,
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
export class MethodPlcModule { }
