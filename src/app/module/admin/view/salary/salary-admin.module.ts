import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import { WorkloadBonusCreateAdminComponent } from './workload-bonus/create/workload-bonus-create-admin.component';
import { WorkloadBonusEditAdminComponent } from './workload-bonus/edit/workload-bonus-edit-admin.component';
import { WorkloadBonusViewAdminComponent } from './workload-bonus/view/workload-bonus-view-admin.component';
import { WorkloadBonusListAdminComponent } from './workload-bonus/list/workload-bonus-list-admin.component';
import { WorkloadBonusProfCreateAdminComponent } from './workload-bonus-prof/create/workload-bonus-prof-create-admin.component';
import { WorkloadBonusProfEditAdminComponent } from './workload-bonus-prof/edit/workload-bonus-prof-edit-admin.component';
import { WorkloadBonusProfViewAdminComponent } from './workload-bonus-prof/view/workload-bonus-prof-view-admin.component';
import { WorkloadBonusProfListAdminComponent } from './workload-bonus-prof/list/workload-bonus-prof-list-admin.component';
import { SalaryCreateAdminComponent } from './salary/create/salary-create-admin.component';
import { SalaryEditAdminComponent } from './salary/edit/salary-edit-admin.component';
import { SalaryViewAdminComponent } from './salary/view/salary-view-admin.component';
import { SalaryListAdminComponent } from './salary/list/salary-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    WorkloadBonusCreateAdminComponent,
    WorkloadBonusListAdminComponent,
    WorkloadBonusViewAdminComponent,
    WorkloadBonusEditAdminComponent,
    WorkloadBonusProfCreateAdminComponent,
    WorkloadBonusProfListAdminComponent,
    WorkloadBonusProfViewAdminComponent,
    WorkloadBonusProfEditAdminComponent,
    SalaryCreateAdminComponent,
    SalaryListAdminComponent,
    SalaryViewAdminComponent,
    SalaryEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,
    CardModule,

  ],
  exports: [
  WorkloadBonusCreateAdminComponent,
  WorkloadBonusListAdminComponent,
  WorkloadBonusViewAdminComponent,
  WorkloadBonusEditAdminComponent,
  WorkloadBonusProfCreateAdminComponent,
  WorkloadBonusProfListAdminComponent,
  WorkloadBonusProfViewAdminComponent,
  WorkloadBonusProfEditAdminComponent,
  SalaryCreateAdminComponent,
  SalaryListAdminComponent,
  SalaryViewAdminComponent,
  SalaryEditAdminComponent,
  ],
})
export class SalaryAdminModule { }
