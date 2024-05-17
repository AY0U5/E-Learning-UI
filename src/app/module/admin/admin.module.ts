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
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

import { QuizAdminModule } from './view/quiz/quiz-admin.module';
import { QuizAdminRoutingModule } from './view/quiz/quiz-admin-routing.module';
import { RecomreclaAdminModule } from './view/recomrecla/recomrecla-admin.module';
import { RecomreclaAdminRoutingModule } from './view/recomrecla/recomrecla-admin-routing.module';
import { PaiementAdminModule } from './view/paiement/paiement-admin.module';
import { PaiementAdminRoutingModule } from './view/paiement/paiement-admin-routing.module';
import { InscriptionrefAdminModule } from './view/inscriptionref/inscriptionref-admin.module';
import { InscriptionrefAdminRoutingModule } from './view/inscriptionref/inscriptionref-admin-routing.module';
import { CourserefAdminModule } from './view/courseref/courseref-admin.module';
import { CourserefAdminRoutingModule } from './view/courseref/courseref-admin-routing.module';
import { LearningAdminModule } from './view/learning/learning-admin.module';
import { LearningAdminRoutingModule } from './view/learning/learning-admin-routing.module';
import { ClassroomAdminModule } from './view/classroom/classroom-admin.module';
import { ClassroomAdminRoutingModule } from './view/classroom/classroom-admin-routing.module';
import { ProfetudiantcoursAdminModule } from './view/profetudiantcours/profetudiantcours-admin.module';
import { ProfetudiantcoursAdminRoutingModule } from './view/profetudiantcours/profetudiantcours-admin-routing.module';
import { PackAdminModule } from './view/pack/pack-admin.module';
import { PackAdminRoutingModule } from './view/pack/pack-admin-routing.module';
import { ProfAdminModule } from './view/prof/prof-admin.module';
import { ProfAdminRoutingModule } from './view/prof/prof-admin-routing.module';
import { SalaryAdminModule } from './view/salary/salary-admin.module';
import { SalaryAdminRoutingModule } from './view/salary/salary-admin-routing.module';
import { GrpeAdminModule } from './view/grpe/grpe-admin.module';
import { GrpeAdminRoutingModule } from './view/grpe/grpe-admin-routing.module';
import { FaqAdminModule } from './view/faq/faq-admin.module';
import { FaqAdminRoutingModule } from './view/faq/faq-admin-routing.module';
import { CommonAdminModule } from './view/common/common-admin.module';
import { CommonAdminRoutingModule } from './view/common/common-admin-routing.module';
import { InscriptionAdminModule } from './view/inscription/inscription-admin.module';
import { InscriptionAdminRoutingModule } from './view/inscription/inscription-admin-routing.module';
import { AlcAdminModule } from './view/alc/alc-admin.module';
import { AlcAdminRoutingModule } from './view/alc/alc-admin-routing.module';
import { PriceAdminModule } from './view/price/price-admin.module';
import { PriceAdminRoutingModule } from './view/price/price-admin-routing.module';
import { VocabAdminModule } from './view/vocab/vocab-admin.module';
import { VocabAdminRoutingModule } from './view/vocab/vocab-admin-routing.module';
import { CourseAdminModule } from './view/course/course-admin.module';
import { CourseAdminRoutingModule } from './view/course/course-admin-routing.module';
import { FreetrialAdminModule } from './view/freetrial/freetrial-admin.module';
import { FreetrialAdminRoutingModule } from './view/freetrial/freetrial-admin-routing.module';
import { ReviewAdminModule } from './view/review/review-admin.module';
import { ReviewAdminRoutingModule } from './view/review/review-admin-routing.module';
import { HomeworkAdminModule } from './view/homework/homework-admin.module';
import { HomeworkAdminRoutingModule } from './view/homework/homework-admin-routing.module';
import { QuizrefAdminModule } from './view/quizref/quizref-admin.module';
import { QuizrefAdminRoutingModule } from './view/quizref/quizref-admin-routing.module';
import { QuizetudiantAdminModule } from './view/quizetudiant/quizetudiant-admin.module';
import { QuizetudiantAdminRoutingModule } from './view/quizetudiant/quizetudiant-admin-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';
import { HomeComponent } from './home/home.component';
import {AppLayoutModule} from "../../layout/app.layout.module";
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent,
   HomeComponent,
   NavComponent
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
        QuizAdminModule,
        QuizAdminRoutingModule,
        RecomreclaAdminModule,
        RecomreclaAdminRoutingModule,
        PaiementAdminModule,
        PaiementAdminRoutingModule,
        InscriptionrefAdminModule,
        InscriptionrefAdminRoutingModule,
        CourserefAdminModule,
        CourserefAdminRoutingModule,
        LearningAdminModule,
        LearningAdminRoutingModule,
        ClassroomAdminModule,
        ClassroomAdminRoutingModule,
        ProfetudiantcoursAdminModule,
        ProfetudiantcoursAdminRoutingModule,
        PackAdminModule,
        PackAdminRoutingModule,
        ProfAdminModule,
        ProfAdminRoutingModule,
        SalaryAdminModule,
        SalaryAdminRoutingModule,
        GrpeAdminModule,
        GrpeAdminRoutingModule,
        FaqAdminModule,
        FaqAdminRoutingModule,
        CommonAdminModule,
        CommonAdminRoutingModule,
        InscriptionAdminModule,
        InscriptionAdminRoutingModule,
        AlcAdminModule,
        AlcAdminRoutingModule,
        PriceAdminModule,
        PriceAdminRoutingModule,
        VocabAdminModule,
        VocabAdminRoutingModule,
        CourseAdminModule,
        CourseAdminRoutingModule,
        FreetrialAdminModule,
        FreetrialAdminRoutingModule,
        ReviewAdminModule,
        ReviewAdminRoutingModule,
        HomeworkAdminModule,
        HomeworkAdminRoutingModule,
        QuizrefAdminModule,
        QuizrefAdminRoutingModule,
        QuizetudiantAdminModule,
        QuizetudiantAdminRoutingModule,
        SecurityModule,
        SecurityRoutingModule,
        AppLayoutModule
    ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,

    QuizAdminModule,
    RecomreclaAdminModule,
    PaiementAdminModule,
    InscriptionrefAdminModule,
    CourserefAdminModule,
    LearningAdminModule,
    ClassroomAdminModule,
    ProfetudiantcoursAdminModule,
    PackAdminModule,
    ProfAdminModule,
    SalaryAdminModule,
    GrpeAdminModule,
    FaqAdminModule,
    CommonAdminModule,
    InscriptionAdminModule,
    AlcAdminModule,
    PriceAdminModule,
    VocabAdminModule,
    CourseAdminModule,
    FreetrialAdminModule,
    ReviewAdminModule,
    HomeworkAdminModule,
    QuizrefAdminModule,
    QuizetudiantAdminModule,
  SecurityModule
  ],

})
export class AdminModule { }
