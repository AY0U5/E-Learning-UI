
// const root = environment.rootAppUrl;



import {UserListComponent} from 'src/app/module/security/user/list/user-list.component';
import {ModelPermissionListComponent} from 'src/app/module/security/model-permission/list/model-permission-list.component';
import {ActionPermissionListComponent} from 'src/app/module/security/action-permission/list/action-permission-list.component';
import {ModelPermissionUserListComponent} from 'src/app/module/security/model-permission-utilisateur/list/model-permission-user-list.component';
import {RoleListComponent} from 'src/app/module/security/role/list/role-list.component';



import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';



import { FonctionListAdminComponent } from './fonction/list/fonction-list-admin.component';
import { EtatEtudiantScheduleListAdminComponent } from './etat-etudiant-schedule/list/etat-etudiant-schedule-list-admin.component';
import { StatutSocialListAdminComponent } from './statut-social/list/statut-social-list-admin.component';
import { TeacherLocalityListAdminComponent } from './teacher-locality/list/teacher-locality-list-admin.component';
import { SkillListAdminComponent } from './skill/list/skill-list-admin.component';
import { NiveauEtudeListAdminComponent } from './niveau-etude/list/niveau-etude-list-admin.component';
import { EtatInscriptionListAdminComponent } from './etat-inscription/list/etat-inscription-list-admin.component';
import { LangueListAdminComponent } from './langue/list/langue-list-admin.component';
import { ConfirmationTokenListAdminComponent } from './confirmation-token/list/confirmation-token-list-admin.component';
import { InviteStudentListAdminComponent } from './invite-student/list/invite-student-list-admin.component';
import { EtudiantReviewListAdminComponent } from './etudiant-review/list/etudiant-review-list-admin.component';
import { InteretEtudiantListAdminComponent } from './interet-etudiant/list/interet-etudiant-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {

                            path: 'action-permission',
                            children: [
                                {
                                    path: 'list',
                                    component: ActionPermissionListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-permission-user',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelPermissionUserListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'role',
                            children: [
                                {
                                    path: 'list',
                                    component: RoleListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'user',
                            children: [
                                {
                                    path: 'list',
                                    component: UserListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-permission',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelPermissionListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },


                        {

                            path: 'fonction',
                            children: [
                                {
                                    path: 'list',
                                    component: FonctionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-etudiant-schedule',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatEtudiantScheduleListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'statut-social',
                            children: [
                                {
                                    path: 'list',
                                    component: StatutSocialListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'teacher-locality',
                            children: [
                                {
                                    path: 'list',
                                    component: TeacherLocalityListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'skill',
                            children: [
                                {
                                    path: 'list',
                                    component: SkillListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'niveau-etude',
                            children: [
                                {
                                    path: 'list',
                                    component: NiveauEtudeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-inscription',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatInscriptionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'langue',
                            children: [
                                {
                                    path: 'list',
                                    component: LangueListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'confirmation-token',
                            children: [
                                {
                                    path: 'list',
                                    component: ConfirmationTokenListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'invite-student',
                            children: [
                                {
                                    path: 'list',
                                    component: InviteStudentListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etudiant-review',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantReviewListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'interet-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: InteretEtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class InscriptionrefAdminRoutingModule { }
