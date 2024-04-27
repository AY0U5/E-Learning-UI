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

import { GroupeTypeCreateAdminComponent } from './groupe-type/create/groupe-type-create-admin.component';
import { GroupeTypeEditAdminComponent } from './groupe-type/edit/groupe-type-edit-admin.component';
import { GroupeTypeViewAdminComponent } from './groupe-type/view/groupe-type-view-admin.component';
import { GroupeTypeListAdminComponent } from './groupe-type/list/groupe-type-list-admin.component';
import { GroupeEtudiantCreateAdminComponent } from './groupe-etudiant/create/groupe-etudiant-create-admin.component';
import { GroupeEtudiantEditAdminComponent } from './groupe-etudiant/edit/groupe-etudiant-edit-admin.component';
import { GroupeEtudiantViewAdminComponent } from './groupe-etudiant/view/groupe-etudiant-view-admin.component';
import { GroupeEtudiantListAdminComponent } from './groupe-etudiant/list/groupe-etudiant-list-admin.component';
import { GroupeEtudeCreateAdminComponent } from './groupe-etude/create/groupe-etude-create-admin.component';
import { GroupeEtudeEditAdminComponent } from './groupe-etude/edit/groupe-etude-edit-admin.component';
import { GroupeEtudeViewAdminComponent } from './groupe-etude/view/groupe-etude-view-admin.component';
import { GroupeEtudeListAdminComponent } from './groupe-etude/list/groupe-etude-list-admin.component';
import { InscriptionCreateAdminComponent } from './inscription/create/inscription-create-admin.component';
import { InscriptionEditAdminComponent } from './inscription/edit/inscription-edit-admin.component';
import { InscriptionViewAdminComponent } from './inscription/view/inscription-view-admin.component';
import { InscriptionListAdminComponent } from './inscription/list/inscription-list-admin.component';
import { GroupeEtatCreateAdminComponent } from './groupe-etat/create/groupe-etat-create-admin.component';
import { GroupeEtatEditAdminComponent } from './groupe-etat/edit/groupe-etat-edit-admin.component';
import { GroupeEtatViewAdminComponent } from './groupe-etat/view/groupe-etat-view-admin.component';
import { GroupeEtatListAdminComponent } from './groupe-etat/list/groupe-etat-list-admin.component';

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

    GroupeTypeCreateAdminComponent,
    GroupeTypeListAdminComponent,
    GroupeTypeViewAdminComponent,
    GroupeTypeEditAdminComponent,
    GroupeEtudiantCreateAdminComponent,
    GroupeEtudiantListAdminComponent,
    GroupeEtudiantViewAdminComponent,
    GroupeEtudiantEditAdminComponent,
    GroupeEtudeCreateAdminComponent,
    GroupeEtudeListAdminComponent,
    GroupeEtudeViewAdminComponent,
    GroupeEtudeEditAdminComponent,
    InscriptionCreateAdminComponent,
    InscriptionListAdminComponent,
    InscriptionViewAdminComponent,
    InscriptionEditAdminComponent,
    GroupeEtatCreateAdminComponent,
    GroupeEtatListAdminComponent,
    GroupeEtatViewAdminComponent,
    GroupeEtatEditAdminComponent,
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
  GroupeTypeCreateAdminComponent,
  GroupeTypeListAdminComponent,
  GroupeTypeViewAdminComponent,
  GroupeTypeEditAdminComponent,
  GroupeEtudiantCreateAdminComponent,
  GroupeEtudiantListAdminComponent,
  GroupeEtudiantViewAdminComponent,
  GroupeEtudiantEditAdminComponent,
  GroupeEtudeCreateAdminComponent,
  GroupeEtudeListAdminComponent,
  GroupeEtudeViewAdminComponent,
  GroupeEtudeEditAdminComponent,
  InscriptionCreateAdminComponent,
  InscriptionListAdminComponent,
  InscriptionViewAdminComponent,
  InscriptionEditAdminComponent,
  GroupeEtatCreateAdminComponent,
  GroupeEtatListAdminComponent,
  GroupeEtatViewAdminComponent,
  GroupeEtatEditAdminComponent,
  ],
})
export class GrpeAdminModule { }
