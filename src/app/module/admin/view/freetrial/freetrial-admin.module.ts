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

import { FreeTrialDetailCreateAdminComponent } from './free-trial-detail/create/free-trial-detail-create-admin.component';
import { FreeTrialDetailEditAdminComponent } from './free-trial-detail/edit/free-trial-detail-edit-admin.component';
import { FreeTrialDetailViewAdminComponent } from './free-trial-detail/view/free-trial-detail-view-admin.component';
import { FreeTrialDetailListAdminComponent } from './free-trial-detail/list/free-trial-detail-list-admin.component';
import { FreeTrialConfigurationCreateAdminComponent } from './free-trial-configuration/create/free-trial-configuration-create-admin.component';
import { FreeTrialConfigurationEditAdminComponent } from './free-trial-configuration/edit/free-trial-configuration-edit-admin.component';
import { FreeTrialConfigurationViewAdminComponent } from './free-trial-configuration/view/free-trial-configuration-view-admin.component';
import { FreeTrialConfigurationListAdminComponent } from './free-trial-configuration/list/free-trial-configuration-list-admin.component';
import { ServicesCreateAdminComponent } from './services/create/services-create-admin.component';
import { ServicesEditAdminComponent } from './services/edit/services-edit-admin.component';
import { ServicesViewAdminComponent } from './services/view/services-view-admin.component';
import { ServicesListAdminComponent } from './services/list/services-list-admin.component';
import { FreeTrialStudentWhatsTemplateCreateAdminComponent } from './free-trial-student-whats-template/create/free-trial-student-whats-template-create-admin.component';
import { FreeTrialStudentWhatsTemplateEditAdminComponent } from './free-trial-student-whats-template/edit/free-trial-student-whats-template-edit-admin.component';
import { FreeTrialStudentWhatsTemplateViewAdminComponent } from './free-trial-student-whats-template/view/free-trial-student-whats-template-view-admin.component';
import { FreeTrialStudentWhatsTemplateListAdminComponent } from './free-trial-student-whats-template/list/free-trial-student-whats-template-list-admin.component';
import { FreeTrialformuleCreateAdminComponent } from './free-trialformule/create/free-trialformule-create-admin.component';
import { FreeTrialformuleEditAdminComponent } from './free-trialformule/edit/free-trialformule-edit-admin.component';
import { FreeTrialformuleViewAdminComponent } from './free-trialformule/view/free-trialformule-view-admin.component';
import { FreeTrialformuleListAdminComponent } from './free-trialformule/list/free-trialformule-list-admin.component';
import { FreeTrialTeacherEmailTemplateCreateAdminComponent } from './free-trial-teacher-email-template/create/free-trial-teacher-email-template-create-admin.component';
import { FreeTrialTeacherEmailTemplateEditAdminComponent } from './free-trial-teacher-email-template/edit/free-trial-teacher-email-template-edit-admin.component';
import { FreeTrialTeacherEmailTemplateViewAdminComponent } from './free-trial-teacher-email-template/view/free-trial-teacher-email-template-view-admin.component';
import { FreeTrialTeacherEmailTemplateListAdminComponent } from './free-trial-teacher-email-template/list/free-trial-teacher-email-template-list-admin.component';
import { FreeTrialCreateAdminComponent } from './free-trial/create/free-trial-create-admin.component';
import { FreeTrialEditAdminComponent } from './free-trial/edit/free-trial-edit-admin.component';
import { FreeTrialViewAdminComponent } from './free-trial/view/free-trial-view-admin.component';
import { FreeTrialListAdminComponent } from './free-trial/list/free-trial-list-admin.component';
import { StatutFreeTrialCreateAdminComponent } from './statut-free-trial/create/statut-free-trial-create-admin.component';
import { StatutFreeTrialEditAdminComponent } from './statut-free-trial/edit/statut-free-trial-edit-admin.component';
import { StatutFreeTrialViewAdminComponent } from './statut-free-trial/view/statut-free-trial-view-admin.component';
import { StatutFreeTrialListAdminComponent } from './statut-free-trial/list/statut-free-trial-list-admin.component';
import { FreeTrialStudentEmailTemplateCreateAdminComponent } from './free-trial-student-email-template/create/free-trial-student-email-template-create-admin.component';
import { FreeTrialStudentEmailTemplateEditAdminComponent } from './free-trial-student-email-template/edit/free-trial-student-email-template-edit-admin.component';
import { FreeTrialStudentEmailTemplateViewAdminComponent } from './free-trial-student-email-template/view/free-trial-student-email-template-view-admin.component';
import { FreeTrialStudentEmailTemplateListAdminComponent } from './free-trial-student-email-template/list/free-trial-student-email-template-list-admin.component';
import { FreeTrialTeacherWhatsTemplateCreateAdminComponent } from './free-trial-teacher-whats-template/create/free-trial-teacher-whats-template-create-admin.component';
import { FreeTrialTeacherWhatsTemplateEditAdminComponent } from './free-trial-teacher-whats-template/edit/free-trial-teacher-whats-template-edit-admin.component';
import { FreeTrialTeacherWhatsTemplateViewAdminComponent } from './free-trial-teacher-whats-template/view/free-trial-teacher-whats-template-view-admin.component';
import { FreeTrialTeacherWhatsTemplateListAdminComponent } from './free-trial-teacher-whats-template/list/free-trial-teacher-whats-template-list-admin.component';

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

    FreeTrialDetailCreateAdminComponent,
    FreeTrialDetailListAdminComponent,
    FreeTrialDetailViewAdminComponent,
    FreeTrialDetailEditAdminComponent,
    FreeTrialConfigurationCreateAdminComponent,
    FreeTrialConfigurationListAdminComponent,
    FreeTrialConfigurationViewAdminComponent,
    FreeTrialConfigurationEditAdminComponent,
    ServicesCreateAdminComponent,
    ServicesListAdminComponent,
    ServicesViewAdminComponent,
    ServicesEditAdminComponent,
    FreeTrialStudentWhatsTemplateCreateAdminComponent,
    FreeTrialStudentWhatsTemplateListAdminComponent,
    FreeTrialStudentWhatsTemplateViewAdminComponent,
    FreeTrialStudentWhatsTemplateEditAdminComponent,
    FreeTrialformuleCreateAdminComponent,
    FreeTrialformuleListAdminComponent,
    FreeTrialformuleViewAdminComponent,
    FreeTrialformuleEditAdminComponent,
    FreeTrialTeacherEmailTemplateCreateAdminComponent,
    FreeTrialTeacherEmailTemplateListAdminComponent,
    FreeTrialTeacherEmailTemplateViewAdminComponent,
    FreeTrialTeacherEmailTemplateEditAdminComponent,
    FreeTrialCreateAdminComponent,
    FreeTrialListAdminComponent,
    FreeTrialViewAdminComponent,
    FreeTrialEditAdminComponent,
    StatutFreeTrialCreateAdminComponent,
    StatutFreeTrialListAdminComponent,
    StatutFreeTrialViewAdminComponent,
    StatutFreeTrialEditAdminComponent,
    FreeTrialStudentEmailTemplateCreateAdminComponent,
    FreeTrialStudentEmailTemplateListAdminComponent,
    FreeTrialStudentEmailTemplateViewAdminComponent,
    FreeTrialStudentEmailTemplateEditAdminComponent,
    FreeTrialTeacherWhatsTemplateCreateAdminComponent,
    FreeTrialTeacherWhatsTemplateListAdminComponent,
    FreeTrialTeacherWhatsTemplateViewAdminComponent,
    FreeTrialTeacherWhatsTemplateEditAdminComponent,
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
  FreeTrialDetailCreateAdminComponent,
  FreeTrialDetailListAdminComponent,
  FreeTrialDetailViewAdminComponent,
  FreeTrialDetailEditAdminComponent,
  FreeTrialConfigurationCreateAdminComponent,
  FreeTrialConfigurationListAdminComponent,
  FreeTrialConfigurationViewAdminComponent,
  FreeTrialConfigurationEditAdminComponent,
  ServicesCreateAdminComponent,
  ServicesListAdminComponent,
  ServicesViewAdminComponent,
  ServicesEditAdminComponent,
  FreeTrialStudentWhatsTemplateCreateAdminComponent,
  FreeTrialStudentWhatsTemplateListAdminComponent,
  FreeTrialStudentWhatsTemplateViewAdminComponent,
  FreeTrialStudentWhatsTemplateEditAdminComponent,
  FreeTrialformuleCreateAdminComponent,
  FreeTrialformuleListAdminComponent,
  FreeTrialformuleViewAdminComponent,
  FreeTrialformuleEditAdminComponent,
  FreeTrialTeacherEmailTemplateCreateAdminComponent,
  FreeTrialTeacherEmailTemplateListAdminComponent,
  FreeTrialTeacherEmailTemplateViewAdminComponent,
  FreeTrialTeacherEmailTemplateEditAdminComponent,
  FreeTrialCreateAdminComponent,
  FreeTrialListAdminComponent,
  FreeTrialViewAdminComponent,
  FreeTrialEditAdminComponent,
  StatutFreeTrialCreateAdminComponent,
  StatutFreeTrialListAdminComponent,
  StatutFreeTrialViewAdminComponent,
  StatutFreeTrialEditAdminComponent,
  FreeTrialStudentEmailTemplateCreateAdminComponent,
  FreeTrialStudentEmailTemplateListAdminComponent,
  FreeTrialStudentEmailTemplateViewAdminComponent,
  FreeTrialStudentEmailTemplateEditAdminComponent,
  FreeTrialTeacherWhatsTemplateCreateAdminComponent,
  FreeTrialTeacherWhatsTemplateListAdminComponent,
  FreeTrialTeacherWhatsTemplateViewAdminComponent,
  FreeTrialTeacherWhatsTemplateEditAdminComponent,
  ],
})
export class FreetrialAdminModule { }
