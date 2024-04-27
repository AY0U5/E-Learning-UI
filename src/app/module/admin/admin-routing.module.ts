
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'quiz',
                            loadChildren: () => import('./view/quiz/quiz-admin-routing.module').then(x => x.QuizAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'recomrecla',
                            loadChildren: () => import('./view/recomrecla/recomrecla-admin-routing.module').then(x => x.RecomreclaAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'paiement',
                            loadChildren: () => import('./view/paiement/paiement-admin-routing.module').then(x => x.PaiementAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'inscriptionref',
                            loadChildren: () => import('./view/inscriptionref/inscriptionref-admin-routing.module').then(x => x.InscriptionrefAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'courseref',
                            loadChildren: () => import('./view/courseref/courseref-admin-routing.module').then(x => x.CourserefAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'learning',
                            loadChildren: () => import('./view/learning/learning-admin-routing.module').then(x => x.LearningAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'classroom',
                            loadChildren: () => import('./view/classroom/classroom-admin-routing.module').then(x => x.ClassroomAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'profetudiantcours',
                            loadChildren: () => import('./view/profetudiantcours/profetudiantcours-admin-routing.module').then(x => x.ProfetudiantcoursAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'pack',
                            loadChildren: () => import('./view/pack/pack-admin-routing.module').then(x => x.PackAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'prof',
                            loadChildren: () => import('./view/prof/prof-admin-routing.module').then(x => x.ProfAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'salary',
                            loadChildren: () => import('./view/salary/salary-admin-routing.module').then(x => x.SalaryAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'grpe',
                            loadChildren: () => import('./view/grpe/grpe-admin-routing.module').then(x => x.GrpeAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'faq',
                            loadChildren: () => import('./view/faq/faq-admin-routing.module').then(x => x.FaqAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'common',
                            loadChildren: () => import('./view/common/common-admin-routing.module').then(x => x.CommonAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'inscription',
                            loadChildren: () => import('./view/inscription/inscription-admin-routing.module').then(x => x.InscriptionAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'alc',
                            loadChildren: () => import('./view/alc/alc-admin-routing.module').then(x => x.AlcAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'price',
                            loadChildren: () => import('./view/price/price-admin-routing.module').then(x => x.PriceAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'vocab',
                            loadChildren: () => import('./view/vocab/vocab-admin-routing.module').then(x => x.VocabAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'course',
                            loadChildren: () => import('./view/course/course-admin-routing.module').then(x => x.CourseAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'freetrial',
                            loadChildren: () => import('./view/freetrial/freetrial-admin-routing.module').then(x => x.FreetrialAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'review',
                            loadChildren: () => import('./view/review/review-admin-routing.module').then(x => x.ReviewAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'homework',
                            loadChildren: () => import('./view/homework/homework-admin-routing.module').then(x => x.HomeworkAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'quizref',
                            loadChildren: () => import('./view/quizref/quizref-admin-routing.module').then(x => x.QuizrefAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'quizetudiant',
                            loadChildren: () => import('./view/quizetudiant/quizetudiant-admin-routing.module').then(x => x.QuizetudiantAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'security',
                            loadChildren: () => import('../security/security-routing.module').then(x => x.SecurityRoutingModule),
                            canActivate: [AuthGuard],
                        }
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
