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

import { HoweWorkQSTReponseCreateAdminComponent } from './howe-work-q-s-t-reponse/create/howe-work-q-s-t-reponse-create-admin.component';
import { HoweWorkQSTReponseEditAdminComponent } from './howe-work-q-s-t-reponse/edit/howe-work-q-s-t-reponse-edit-admin.component';
import { HoweWorkQSTReponseViewAdminComponent } from './howe-work-q-s-t-reponse/view/howe-work-q-s-t-reponse-view-admin.component';
import { HoweWorkQSTReponseListAdminComponent } from './howe-work-q-s-t-reponse/list/howe-work-q-s-t-reponse-list-admin.component';
import { HomeWorkCreateAdminComponent } from './home-work/create/home-work-create-admin.component';
import { HomeWorkEditAdminComponent } from './home-work/edit/home-work-edit-admin.component';
import { HomeWorkViewAdminComponent } from './home-work/view/home-work-view-admin.component';
import { HomeWorkListAdminComponent } from './home-work/list/home-work-list-admin.component';
import { HomeWorkEtudiantCreateAdminComponent } from './home-work-etudiant/create/home-work-etudiant-create-admin.component';
import { HomeWorkEtudiantEditAdminComponent } from './home-work-etudiant/edit/home-work-etudiant-edit-admin.component';
import { HomeWorkEtudiantViewAdminComponent } from './home-work-etudiant/view/home-work-etudiant-view-admin.component';
import { HomeWorkEtudiantListAdminComponent } from './home-work-etudiant/list/home-work-etudiant-list-admin.component';
import { TypeHomeWorkCreateAdminComponent } from './type-home-work/create/type-home-work-create-admin.component';
import { TypeHomeWorkEditAdminComponent } from './type-home-work/edit/type-home-work-edit-admin.component';
import { TypeHomeWorkViewAdminComponent } from './type-home-work/view/type-home-work-view-admin.component';
import { TypeHomeWorkListAdminComponent } from './type-home-work/list/type-home-work-list-admin.component';
import { HomeWorkQuestionCreateAdminComponent } from './home-work-question/create/home-work-question-create-admin.component';
import { HomeWorkQuestionEditAdminComponent } from './home-work-question/edit/home-work-question-edit-admin.component';
import { HomeWorkQuestionViewAdminComponent } from './home-work-question/view/home-work-question-view-admin.component';
import { HomeWorkQuestionListAdminComponent } from './home-work-question/list/home-work-question-list-admin.component';
import { ReponseEtudiantHomeWorkCreateAdminComponent } from './reponse-etudiant-home-work/create/reponse-etudiant-home-work-create-admin.component';
import { ReponseEtudiantHomeWorkEditAdminComponent } from './reponse-etudiant-home-work/edit/reponse-etudiant-home-work-edit-admin.component';
import { ReponseEtudiantHomeWorkViewAdminComponent } from './reponse-etudiant-home-work/view/reponse-etudiant-home-work-view-admin.component';
import { ReponseEtudiantHomeWorkListAdminComponent } from './reponse-etudiant-home-work/list/reponse-etudiant-home-work-list-admin.component';

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

    HoweWorkQSTReponseCreateAdminComponent,
    HoweWorkQSTReponseListAdminComponent,
    HoweWorkQSTReponseViewAdminComponent,
    HoweWorkQSTReponseEditAdminComponent,
    HomeWorkCreateAdminComponent,
    HomeWorkListAdminComponent,
    HomeWorkViewAdminComponent,
    HomeWorkEditAdminComponent,
    HomeWorkEtudiantCreateAdminComponent,
    HomeWorkEtudiantListAdminComponent,
    HomeWorkEtudiantViewAdminComponent,
    HomeWorkEtudiantEditAdminComponent,
    TypeHomeWorkCreateAdminComponent,
    TypeHomeWorkListAdminComponent,
    TypeHomeWorkViewAdminComponent,
    TypeHomeWorkEditAdminComponent,
    HomeWorkQuestionCreateAdminComponent,
    HomeWorkQuestionListAdminComponent,
    HomeWorkQuestionViewAdminComponent,
    HomeWorkQuestionEditAdminComponent,
    ReponseEtudiantHomeWorkCreateAdminComponent,
    ReponseEtudiantHomeWorkListAdminComponent,
    ReponseEtudiantHomeWorkViewAdminComponent,
    ReponseEtudiantHomeWorkEditAdminComponent,
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
  HoweWorkQSTReponseCreateAdminComponent,
  HoweWorkQSTReponseListAdminComponent,
  HoweWorkQSTReponseViewAdminComponent,
  HoweWorkQSTReponseEditAdminComponent,
  HomeWorkCreateAdminComponent,
  HomeWorkListAdminComponent,
  HomeWorkViewAdminComponent,
  HomeWorkEditAdminComponent,
  HomeWorkEtudiantCreateAdminComponent,
  HomeWorkEtudiantListAdminComponent,
  HomeWorkEtudiantViewAdminComponent,
  HomeWorkEtudiantEditAdminComponent,
  TypeHomeWorkCreateAdminComponent,
  TypeHomeWorkListAdminComponent,
  TypeHomeWorkViewAdminComponent,
  TypeHomeWorkEditAdminComponent,
  HomeWorkQuestionCreateAdminComponent,
  HomeWorkQuestionListAdminComponent,
  HomeWorkQuestionViewAdminComponent,
  HomeWorkQuestionEditAdminComponent,
  ReponseEtudiantHomeWorkCreateAdminComponent,
  ReponseEtudiantHomeWorkListAdminComponent,
  ReponseEtudiantHomeWorkViewAdminComponent,
  ReponseEtudiantHomeWorkEditAdminComponent,
  ],
})
export class HomeworkAdminModule { }
