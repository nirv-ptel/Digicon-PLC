import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyPlcRoutingModule } from './company-plc-routing.module';
import { CompanyPlcComponent } from './company-plc.component';
import { AddCompanyPlcComponent } from './add-company-plc/add-company-plc.component';
import { ViewCompanyPlcComponent } from './view-company-plc/view-company-plc.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPaginationModule } from 'ngx-pagination';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbToggleModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompanyPlcComponent,
    AddCompanyPlcComponent,
    ViewCompanyPlcComponent
  ],
  imports: [
    CommonModule,
    CompanyPlcRoutingModule,
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
export class CompanyPlcModule { }
