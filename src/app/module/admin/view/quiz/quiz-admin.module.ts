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

import { QuestionCreateAdminComponent } from './question/create/question-create-admin.component';
import { QuestionEditAdminComponent } from './question/edit/question-edit-admin.component';
import { QuestionViewAdminComponent } from './question/view/question-view-admin.component';
import { QuestionListAdminComponent } from './question/list/question-list-admin.component';
import { QuizCreateAdminComponent } from './quiz/create/quiz-create-admin.component';
import { QuizEditAdminComponent } from './quiz/edit/quiz-edit-admin.component';
import { QuizViewAdminComponent } from './quiz/view/quiz-view-admin.component';
import { QuizListAdminComponent } from './quiz/list/quiz-list-admin.component';
import { ReponseCreateAdminComponent } from './reponse/create/reponse-create-admin.component';
import { ReponseEditAdminComponent } from './reponse/edit/reponse-edit-admin.component';
import { ReponseViewAdminComponent } from './reponse/view/reponse-view-admin.component';
import { ReponseListAdminComponent } from './reponse/list/reponse-list-admin.component';

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
import {RadioButtonModule} from "primeng/radiobutton";
import {ImageModule} from "primeng/image";
import {SafeUrlPipe} from "./question/list/SafeUrlPipe";



@NgModule({
  declarations: [

    QuestionCreateAdminComponent,
    QuestionListAdminComponent,
    QuestionViewAdminComponent,
    QuestionEditAdminComponent,
    QuizCreateAdminComponent,
    QuizListAdminComponent,
    QuizViewAdminComponent,
    QuizEditAdminComponent,
    ReponseCreateAdminComponent,
    ReponseListAdminComponent,
    ReponseViewAdminComponent,
    ReponseEditAdminComponent
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
        RadioButtonModule,
        ImageModule,
        SafeUrlPipe,

    ],
  exports: [
  QuestionCreateAdminComponent,
  QuestionListAdminComponent,
  QuestionViewAdminComponent,
  QuestionEditAdminComponent,
  QuizCreateAdminComponent,
  QuizListAdminComponent,
  QuizViewAdminComponent,
  QuizEditAdminComponent,
  ReponseCreateAdminComponent,
  ReponseListAdminComponent,
  ReponseViewAdminComponent,
  ReponseEditAdminComponent,
  ],
})
export class QuizAdminModule { }
