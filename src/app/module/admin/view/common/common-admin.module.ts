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

import { ContactCreateAdminComponent } from './contact/create/contact-create-admin.component';
import { ContactEditAdminComponent } from './contact/edit/contact-edit-admin.component';
import { ContactViewAdminComponent } from './contact/view/contact-view-admin.component';
import { ContactListAdminComponent } from './contact/list/contact-list-admin.component';
import { ClassAverageBonusCreateAdminComponent } from './class-average-bonus/create/class-average-bonus-create-admin.component';
import { ClassAverageBonusEditAdminComponent } from './class-average-bonus/edit/class-average-bonus-edit-admin.component';
import { ClassAverageBonusViewAdminComponent } from './class-average-bonus/view/class-average-bonus-view-admin.component';
import { ClassAverageBonusListAdminComponent } from './class-average-bonus/list/class-average-bonus-list-admin.component';
import { NewsCreateAdminComponent } from './news/create/news-create-admin.component';
import { NewsEditAdminComponent } from './news/edit/news-edit-admin.component';
import { NewsViewAdminComponent } from './news/view/news-view-admin.component';
import { NewsListAdminComponent } from './news/list/news-list-admin.component';

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

    ContactCreateAdminComponent,
    ContactListAdminComponent,
    ContactViewAdminComponent,
    ContactEditAdminComponent,
    ClassAverageBonusCreateAdminComponent,
    ClassAverageBonusListAdminComponent,
    ClassAverageBonusViewAdminComponent,
    ClassAverageBonusEditAdminComponent,
    NewsCreateAdminComponent,
    NewsListAdminComponent,
    NewsViewAdminComponent,
    NewsEditAdminComponent,
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
  ContactCreateAdminComponent,
  ContactListAdminComponent,
  ContactViewAdminComponent,
  ContactEditAdminComponent,
  ClassAverageBonusCreateAdminComponent,
  ClassAverageBonusListAdminComponent,
  ClassAverageBonusViewAdminComponent,
  ClassAverageBonusEditAdminComponent,
  NewsCreateAdminComponent,
  NewsListAdminComponent,
  NewsViewAdminComponent,
  NewsEditAdminComponent,
  ],
})
export class CommonAdminModule { }
