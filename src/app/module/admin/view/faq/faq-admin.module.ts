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

import { FaqEtudiantCreateAdminComponent } from './faq-etudiant/create/faq-etudiant-create-admin.component';
import { FaqEtudiantEditAdminComponent } from './faq-etudiant/edit/faq-etudiant-edit-admin.component';
import { FaqEtudiantViewAdminComponent } from './faq-etudiant/view/faq-etudiant-view-admin.component';
import { FaqEtudiantListAdminComponent } from './faq-etudiant/list/faq-etudiant-list-admin.component';
import { FaqProfCreateAdminComponent } from './faq-prof/create/faq-prof-create-admin.component';
import { FaqProfEditAdminComponent } from './faq-prof/edit/faq-prof-edit-admin.component';
import { FaqProfViewAdminComponent } from './faq-prof/view/faq-prof-view-admin.component';
import { FaqProfListAdminComponent } from './faq-prof/list/faq-prof-list-admin.component';
import { FaqTypeCreateAdminComponent } from './faq-type/create/faq-type-create-admin.component';
import { FaqTypeEditAdminComponent } from './faq-type/edit/faq-type-edit-admin.component';
import { FaqTypeViewAdminComponent } from './faq-type/view/faq-type-view-admin.component';
import { FaqTypeListAdminComponent } from './faq-type/list/faq-type-list-admin.component';
import { FaqCreateAdminComponent } from './faq/create/faq-create-admin.component';
import { FaqEditAdminComponent } from './faq/edit/faq-edit-admin.component';
import { FaqViewAdminComponent } from './faq/view/faq-view-admin.component';
import { FaqListAdminComponent } from './faq/list/faq-list-admin.component';

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

    FaqEtudiantCreateAdminComponent,
    FaqEtudiantListAdminComponent,
    FaqEtudiantViewAdminComponent,
    FaqEtudiantEditAdminComponent,
    FaqProfCreateAdminComponent,
    FaqProfListAdminComponent,
    FaqProfViewAdminComponent,
    FaqProfEditAdminComponent,
    FaqTypeCreateAdminComponent,
    FaqTypeListAdminComponent,
    FaqTypeViewAdminComponent,
    FaqTypeEditAdminComponent,
    FaqCreateAdminComponent,
    FaqListAdminComponent,
    FaqViewAdminComponent,
    FaqEditAdminComponent,
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
  FaqEtudiantCreateAdminComponent,
  FaqEtudiantListAdminComponent,
  FaqEtudiantViewAdminComponent,
  FaqEtudiantEditAdminComponent,
  FaqProfCreateAdminComponent,
  FaqProfListAdminComponent,
  FaqProfViewAdminComponent,
  FaqProfEditAdminComponent,
  FaqTypeCreateAdminComponent,
  FaqTypeListAdminComponent,
  FaqTypeViewAdminComponent,
  FaqTypeEditAdminComponent,
  FaqCreateAdminComponent,
  FaqListAdminComponent,
  FaqViewAdminComponent,
  FaqEditAdminComponent,
  ],
})
export class FaqAdminModule { }
