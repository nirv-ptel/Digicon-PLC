import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPaginationModule } from 'ngx-pagination';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbRadioModule, NbSelectModule, NbSidebarModule, NbStepperModule, NbTabsetModule, NbToggleModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './company.component';
import { OneCompanyComponent } from './one-company/one-company.component';
import { ThemeModule } from '../../@theme/theme.module';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyUserComponent } from './company-user/company-user.component';


@NgModule({
  declarations: [
    CompanyComponent,
    AddCompanyComponent,
    ViewCompanyComponent,
    OneCompanyComponent,
    CompanyDetailsComponent,
    CompanyUserComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    ThemeModule,
    CompanyRoutingModule,
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
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
  ]
})
export class CompanyModule { }
