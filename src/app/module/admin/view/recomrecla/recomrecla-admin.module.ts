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

import { RecommendTeacherCreateAdminComponent } from './recommend-teacher/create/recommend-teacher-create-admin.component';
import { RecommendTeacherEditAdminComponent } from './recommend-teacher/edit/recommend-teacher-edit-admin.component';
import { RecommendTeacherViewAdminComponent } from './recommend-teacher/view/recommend-teacher-view-admin.component';
import { RecommendTeacherListAdminComponent } from './recommend-teacher/list/recommend-teacher-list-admin.component';
import { TypeReclamationEtudiantCreateAdminComponent } from './type-reclamation-etudiant/create/type-reclamation-etudiant-create-admin.component';
import { TypeReclamationEtudiantEditAdminComponent } from './type-reclamation-etudiant/edit/type-reclamation-etudiant-edit-admin.component';
import { TypeReclamationEtudiantViewAdminComponent } from './type-reclamation-etudiant/view/type-reclamation-etudiant-view-admin.component';
import { TypeReclamationEtudiantListAdminComponent } from './type-reclamation-etudiant/list/type-reclamation-etudiant-list-admin.component';
import { ReclamationProfCreateAdminComponent } from './reclamation-prof/create/reclamation-prof-create-admin.component';
import { ReclamationProfEditAdminComponent } from './reclamation-prof/edit/reclamation-prof-edit-admin.component';
import { ReclamationProfViewAdminComponent } from './reclamation-prof/view/reclamation-prof-view-admin.component';
import { ReclamationProfListAdminComponent } from './reclamation-prof/list/reclamation-prof-list-admin.component';
import { ReclamationEtudiantCreateAdminComponent } from './reclamation-etudiant/create/reclamation-etudiant-create-admin.component';
import { ReclamationEtudiantEditAdminComponent } from './reclamation-etudiant/edit/reclamation-etudiant-edit-admin.component';
import { ReclamationEtudiantViewAdminComponent } from './reclamation-etudiant/view/reclamation-etudiant-view-admin.component';
import { ReclamationEtudiantListAdminComponent } from './reclamation-etudiant/list/reclamation-etudiant-list-admin.component';
import { TypeReclamationProfCreateAdminComponent } from './type-reclamation-prof/create/type-reclamation-prof-create-admin.component';
import { TypeReclamationProfEditAdminComponent } from './type-reclamation-prof/edit/type-reclamation-prof-edit-admin.component';
import { TypeReclamationProfViewAdminComponent } from './type-reclamation-prof/view/type-reclamation-prof-view-admin.component';
import { TypeReclamationProfListAdminComponent } from './type-reclamation-prof/list/type-reclamation-prof-list-admin.component';

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

    RecommendTeacherCreateAdminComponent,
    RecommendTeacherListAdminComponent,
    RecommendTeacherViewAdminComponent,
    RecommendTeacherEditAdminComponent,
    TypeReclamationEtudiantCreateAdminComponent,
    TypeReclamationEtudiantListAdminComponent,
    TypeReclamationEtudiantViewAdminComponent,
    TypeReclamationEtudiantEditAdminComponent,
    ReclamationProfCreateAdminComponent,
    ReclamationProfListAdminComponent,
    ReclamationProfViewAdminComponent,
    ReclamationProfEditAdminComponent,
    ReclamationEtudiantCreateAdminComponent,
    ReclamationEtudiantListAdminComponent,
    ReclamationEtudiantViewAdminComponent,
    ReclamationEtudiantEditAdminComponent,
    TypeReclamationProfCreateAdminComponent,
    TypeReclamationProfListAdminComponent,
    TypeReclamationProfViewAdminComponent,
    TypeReclamationProfEditAdminComponent,
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
  RecommendTeacherCreateAdminComponent,
  RecommendTeacherListAdminComponent,
  RecommendTeacherViewAdminComponent,
  RecommendTeacherEditAdminComponent,
  TypeReclamationEtudiantCreateAdminComponent,
  TypeReclamationEtudiantListAdminComponent,
  TypeReclamationEtudiantViewAdminComponent,
  TypeReclamationEtudiantEditAdminComponent,
  ReclamationProfCreateAdminComponent,
  ReclamationProfListAdminComponent,
  ReclamationProfViewAdminComponent,
  ReclamationProfEditAdminComponent,
  ReclamationEtudiantCreateAdminComponent,
  ReclamationEtudiantListAdminComponent,
  ReclamationEtudiantViewAdminComponent,
  ReclamationEtudiantEditAdminComponent,
  TypeReclamationProfCreateAdminComponent,
  TypeReclamationProfListAdminComponent,
  TypeReclamationProfViewAdminComponent,
  TypeReclamationProfEditAdminComponent,
  ],
})
export class RecomreclaAdminModule { }
