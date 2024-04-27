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

import { ScheduleProfCreateAdminComponent } from './schedule-prof/create/schedule-prof-create-admin.component';
import { ScheduleProfEditAdminComponent } from './schedule-prof/edit/schedule-prof-edit-admin.component';
import { ScheduleProfViewAdminComponent } from './schedule-prof/view/schedule-prof-view-admin.component';
import { ScheduleProfListAdminComponent } from './schedule-prof/list/schedule-prof-list-admin.component';
import { TrancheHoraireProfCreateAdminComponent } from './tranche-horaire-prof/create/tranche-horaire-prof-create-admin.component';
import { TrancheHoraireProfEditAdminComponent } from './tranche-horaire-prof/edit/tranche-horaire-prof-edit-admin.component';
import { TrancheHoraireProfViewAdminComponent } from './tranche-horaire-prof/view/tranche-horaire-prof-view-admin.component';
import { TrancheHoraireProfListAdminComponent } from './tranche-horaire-prof/list/tranche-horaire-prof-list-admin.component';
import { ClassAverageBonusProfCreateAdminComponent } from './class-average-bonus-prof/create/class-average-bonus-prof-create-admin.component';
import { ClassAverageBonusProfEditAdminComponent } from './class-average-bonus-prof/edit/class-average-bonus-prof-edit-admin.component';
import { ClassAverageBonusProfViewAdminComponent } from './class-average-bonus-prof/view/class-average-bonus-prof-view-admin.component';
import { ClassAverageBonusProfListAdminComponent } from './class-average-bonus-prof/list/class-average-bonus-prof-list-admin.component';
import { ProfCreateAdminComponent } from './prof/create/prof-create-admin.component';
import { ProfEditAdminComponent } from './prof/edit/prof-edit-admin.component';
import { ProfViewAdminComponent } from './prof/view/prof-view-admin.component';
import { ProfListAdminComponent } from './prof/list/prof-list-admin.component';
import { CalendrierProfCreateAdminComponent } from './calendrier-prof/create/calendrier-prof-create-admin.component';
import { CalendrierProfEditAdminComponent } from './calendrier-prof/edit/calendrier-prof-edit-admin.component';
import { CalendrierProfViewAdminComponent } from './calendrier-prof/view/calendrier-prof-view-admin.component';
import { CalendrierProfListAdminComponent } from './calendrier-prof/list/calendrier-prof-list-admin.component';
import { CategorieProfCreateAdminComponent } from './categorie-prof/create/categorie-prof-create-admin.component';
import { CategorieProfEditAdminComponent } from './categorie-prof/edit/categorie-prof-edit-admin.component';
import { CategorieProfViewAdminComponent } from './categorie-prof/view/categorie-prof-view-admin.component';
import { CategorieProfListAdminComponent } from './categorie-prof/list/categorie-prof-list-admin.component';
import { TypeTeacherCreateAdminComponent } from './type-teacher/create/type-teacher-create-admin.component';
import { TypeTeacherEditAdminComponent } from './type-teacher/edit/type-teacher-edit-admin.component';
import { TypeTeacherViewAdminComponent } from './type-teacher/view/type-teacher-view-admin.component';
import { TypeTeacherListAdminComponent } from './type-teacher/list/type-teacher-list-admin.component';

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

    ScheduleProfCreateAdminComponent,
    ScheduleProfListAdminComponent,
    ScheduleProfViewAdminComponent,
    ScheduleProfEditAdminComponent,
    TrancheHoraireProfCreateAdminComponent,
    TrancheHoraireProfListAdminComponent,
    TrancheHoraireProfViewAdminComponent,
    TrancheHoraireProfEditAdminComponent,
    ClassAverageBonusProfCreateAdminComponent,
    ClassAverageBonusProfListAdminComponent,
    ClassAverageBonusProfViewAdminComponent,
    ClassAverageBonusProfEditAdminComponent,
    ProfCreateAdminComponent,
    ProfListAdminComponent,
    ProfViewAdminComponent,
    ProfEditAdminComponent,
    CalendrierProfCreateAdminComponent,
    CalendrierProfListAdminComponent,
    CalendrierProfViewAdminComponent,
    CalendrierProfEditAdminComponent,
    CategorieProfCreateAdminComponent,
    CategorieProfListAdminComponent,
    CategorieProfViewAdminComponent,
    CategorieProfEditAdminComponent,
    TypeTeacherCreateAdminComponent,
    TypeTeacherListAdminComponent,
    TypeTeacherViewAdminComponent,
    TypeTeacherEditAdminComponent,
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
  ScheduleProfCreateAdminComponent,
  ScheduleProfListAdminComponent,
  ScheduleProfViewAdminComponent,
  ScheduleProfEditAdminComponent,
  TrancheHoraireProfCreateAdminComponent,
  TrancheHoraireProfListAdminComponent,
  TrancheHoraireProfViewAdminComponent,
  TrancheHoraireProfEditAdminComponent,
  ClassAverageBonusProfCreateAdminComponent,
  ClassAverageBonusProfListAdminComponent,
  ClassAverageBonusProfViewAdminComponent,
  ClassAverageBonusProfEditAdminComponent,
  ProfCreateAdminComponent,
  ProfListAdminComponent,
  ProfViewAdminComponent,
  ProfEditAdminComponent,
  CalendrierProfCreateAdminComponent,
  CalendrierProfListAdminComponent,
  CalendrierProfViewAdminComponent,
  CalendrierProfEditAdminComponent,
  CategorieProfCreateAdminComponent,
  CategorieProfListAdminComponent,
  CategorieProfViewAdminComponent,
  CategorieProfEditAdminComponent,
  TypeTeacherCreateAdminComponent,
  TypeTeacherListAdminComponent,
  TypeTeacherViewAdminComponent,
  TypeTeacherEditAdminComponent,
  ],
})
export class ProfAdminModule { }
