import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPaginationModule } from 'ngx-pagination';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbToggleModule, NbUserModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    Ng2SmartTableModule,
    NgxPaginationModule,
    NbInputModule,

    NbToggleModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbStepperModule,
    ReactiveFormsModule,
    NbDialogModule.forChild(),
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
