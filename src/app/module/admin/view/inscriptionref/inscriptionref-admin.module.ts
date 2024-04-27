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

import { FonctionCreateAdminComponent } from './fonction/create/fonction-create-admin.component';
import { FonctionEditAdminComponent } from './fonction/edit/fonction-edit-admin.component';
import { FonctionViewAdminComponent } from './fonction/view/fonction-view-admin.component';
import { FonctionListAdminComponent } from './fonction/list/fonction-list-admin.component';
import { EtatEtudiantScheduleCreateAdminComponent } from './etat-etudiant-schedule/create/etat-etudiant-schedule-create-admin.component';
import { EtatEtudiantScheduleEditAdminComponent } from './etat-etudiant-schedule/edit/etat-etudiant-schedule-edit-admin.component';
import { EtatEtudiantScheduleViewAdminComponent } from './etat-etudiant-schedule/view/etat-etudiant-schedule-view-admin.component';
import { EtatEtudiantScheduleListAdminComponent } from './etat-etudiant-schedule/list/etat-etudiant-schedule-list-admin.component';
import { StatutSocialCreateAdminComponent } from './statut-social/create/statut-social-create-admin.component';
import { StatutSocialEditAdminComponent } from './statut-social/edit/statut-social-edit-admin.component';
import { StatutSocialViewAdminComponent } from './statut-social/view/statut-social-view-admin.component';
import { StatutSocialListAdminComponent } from './statut-social/list/statut-social-list-admin.component';
import { TeacherLocalityCreateAdminComponent } from './teacher-locality/create/teacher-locality-create-admin.component';
import { TeacherLocalityEditAdminComponent } from './teacher-locality/edit/teacher-locality-edit-admin.component';
import { TeacherLocalityViewAdminComponent } from './teacher-locality/view/teacher-locality-view-admin.component';
import { TeacherLocalityListAdminComponent } from './teacher-locality/list/teacher-locality-list-admin.component';
import { SkillCreateAdminComponent } from './skill/create/skill-create-admin.component';
import { SkillEditAdminComponent } from './skill/edit/skill-edit-admin.component';
import { SkillViewAdminComponent } from './skill/view/skill-view-admin.component';
import { SkillListAdminComponent } from './skill/list/skill-list-admin.component';
import { NiveauEtudeCreateAdminComponent } from './niveau-etude/create/niveau-etude-create-admin.component';
import { NiveauEtudeEditAdminComponent } from './niveau-etude/edit/niveau-etude-edit-admin.component';
import { NiveauEtudeViewAdminComponent } from './niveau-etude/view/niveau-etude-view-admin.component';
import { NiveauEtudeListAdminComponent } from './niveau-etude/list/niveau-etude-list-admin.component';
import { EtatInscriptionCreateAdminComponent } from './etat-inscription/create/etat-inscription-create-admin.component';
import { EtatInscriptionEditAdminComponent } from './etat-inscription/edit/etat-inscription-edit-admin.component';
import { EtatInscriptionViewAdminComponent } from './etat-inscription/view/etat-inscription-view-admin.component';
import { EtatInscriptionListAdminComponent } from './etat-inscription/list/etat-inscription-list-admin.component';
import { LangueCreateAdminComponent } from './langue/create/langue-create-admin.component';
import { LangueEditAdminComponent } from './langue/edit/langue-edit-admin.component';
import { LangueViewAdminComponent } from './langue/view/langue-view-admin.component';
import { LangueListAdminComponent } from './langue/list/langue-list-admin.component';
import { ConfirmationTokenCreateAdminComponent } from './confirmation-token/create/confirmation-token-create-admin.component';
import { ConfirmationTokenEditAdminComponent } from './confirmation-token/edit/confirmation-token-edit-admin.component';
import { ConfirmationTokenViewAdminComponent } from './confirmation-token/view/confirmation-token-view-admin.component';
import { ConfirmationTokenListAdminComponent } from './confirmation-token/list/confirmation-token-list-admin.component';
import { InviteStudentCreateAdminComponent } from './invite-student/create/invite-student-create-admin.component';
import { InviteStudentEditAdminComponent } from './invite-student/edit/invite-student-edit-admin.component';
import { InviteStudentViewAdminComponent } from './invite-student/view/invite-student-view-admin.component';
import { InviteStudentListAdminComponent } from './invite-student/list/invite-student-list-admin.component';
import { EtudiantReviewCreateAdminComponent } from './etudiant-review/create/etudiant-review-create-admin.component';
import { EtudiantReviewEditAdminComponent } from './etudiant-review/edit/etudiant-review-edit-admin.component';
import { EtudiantReviewViewAdminComponent } from './etudiant-review/view/etudiant-review-view-admin.component';
import { EtudiantReviewListAdminComponent } from './etudiant-review/list/etudiant-review-list-admin.component';
import { InteretEtudiantCreateAdminComponent } from './interet-etudiant/create/interet-etudiant-create-admin.component';
import { InteretEtudiantEditAdminComponent } from './interet-etudiant/edit/interet-etudiant-edit-admin.component';
import { InteretEtudiantViewAdminComponent } from './interet-etudiant/view/interet-etudiant-view-admin.component';
import { InteretEtudiantListAdminComponent } from './interet-etudiant/list/interet-etudiant-list-admin.component';

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

    FonctionCreateAdminComponent,
    FonctionListAdminComponent,
    FonctionViewAdminComponent,
    FonctionEditAdminComponent,
    EtatEtudiantScheduleCreateAdminComponent,
    EtatEtudiantScheduleListAdminComponent,
    EtatEtudiantScheduleViewAdminComponent,
    EtatEtudiantScheduleEditAdminComponent,
    StatutSocialCreateAdminComponent,
    StatutSocialListAdminComponent,
    StatutSocialViewAdminComponent,
    StatutSocialEditAdminComponent,
    TeacherLocalityCreateAdminComponent,
    TeacherLocalityListAdminComponent,
    TeacherLocalityViewAdminComponent,
    TeacherLocalityEditAdminComponent,
    SkillCreateAdminComponent,
    SkillListAdminComponent,
    SkillViewAdminComponent,
    SkillEditAdminComponent,
    NiveauEtudeCreateAdminComponent,
    NiveauEtudeListAdminComponent,
    NiveauEtudeViewAdminComponent,
    NiveauEtudeEditAdminComponent,
    EtatInscriptionCreateAdminComponent,
    EtatInscriptionListAdminComponent,
    EtatInscriptionViewAdminComponent,
    EtatInscriptionEditAdminComponent,
    LangueCreateAdminComponent,
    LangueListAdminComponent,
    LangueViewAdminComponent,
    LangueEditAdminComponent,
    ConfirmationTokenCreateAdminComponent,
    ConfirmationTokenListAdminComponent,
    ConfirmationTokenViewAdminComponent,
    ConfirmationTokenEditAdminComponent,
    InviteStudentCreateAdminComponent,
    InviteStudentListAdminComponent,
    InviteStudentViewAdminComponent,
    InviteStudentEditAdminComponent,
    EtudiantReviewCreateAdminComponent,
    EtudiantReviewListAdminComponent,
    EtudiantReviewViewAdminComponent,
    EtudiantReviewEditAdminComponent,
    InteretEtudiantCreateAdminComponent,
    InteretEtudiantListAdminComponent,
    InteretEtudiantViewAdminComponent,
    InteretEtudiantEditAdminComponent,
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
  FonctionCreateAdminComponent,
  FonctionListAdminComponent,
  FonctionViewAdminComponent,
  FonctionEditAdminComponent,
  EtatEtudiantScheduleCreateAdminComponent,
  EtatEtudiantScheduleListAdminComponent,
  EtatEtudiantScheduleViewAdminComponent,
  EtatEtudiantScheduleEditAdminComponent,
  StatutSocialCreateAdminComponent,
  StatutSocialListAdminComponent,
  StatutSocialViewAdminComponent,
  StatutSocialEditAdminComponent,
  TeacherLocalityCreateAdminComponent,
  TeacherLocalityListAdminComponent,
  TeacherLocalityViewAdminComponent,
  TeacherLocalityEditAdminComponent,
  SkillCreateAdminComponent,
  SkillListAdminComponent,
  SkillViewAdminComponent,
  SkillEditAdminComponent,
  NiveauEtudeCreateAdminComponent,
  NiveauEtudeListAdminComponent,
  NiveauEtudeViewAdminComponent,
  NiveauEtudeEditAdminComponent,
  EtatInscriptionCreateAdminComponent,
  EtatInscriptionListAdminComponent,
  EtatInscriptionViewAdminComponent,
  EtatInscriptionEditAdminComponent,
  LangueCreateAdminComponent,
  LangueListAdminComponent,
  LangueViewAdminComponent,
  LangueEditAdminComponent,
  ConfirmationTokenCreateAdminComponent,
  ConfirmationTokenListAdminComponent,
  ConfirmationTokenViewAdminComponent,
  ConfirmationTokenEditAdminComponent,
  InviteStudentCreateAdminComponent,
  InviteStudentListAdminComponent,
  InviteStudentViewAdminComponent,
  InviteStudentEditAdminComponent,
  EtudiantReviewCreateAdminComponent,
  EtudiantReviewListAdminComponent,
  EtudiantReviewViewAdminComponent,
  EtudiantReviewEditAdminComponent,
  InteretEtudiantCreateAdminComponent,
  InteretEtudiantListAdminComponent,
  InteretEtudiantViewAdminComponent,
  InteretEtudiantEditAdminComponent,
  ],
})
export class InscriptionrefAdminModule { }
