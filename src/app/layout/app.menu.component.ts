import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {RoleService} from "../zynerator/security/shared/service/Role.service";
import {AppComponent} from "../app.component";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {Router} from "@angular/router";
import {AppLayoutComponent} from "./app.layout.component";

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelanonymous: any[];
    modelAdmin: any[];
constructor(public layoutService: LayoutService, public app: AppComponent, public appMain: AppLayoutComponent, private roleService: RoleService, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.modelAdmin =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Gestion Invitation',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste invite student',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscriptionref/invite-student/list']
								  },
						]
					  },
					  {
						label: 'Gestion Cours',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste section item',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/course/section-item/list']
								  },
								  {
									label: 'Liste cours',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/course/cours/list']
								  },
								  {
									label: 'Liste parcours',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/course/parcours/list']
								  },
								  {
									label: 'Liste section',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/course/section/list']
								  },
						]
					  },
					  {
						label: 'Gestion Groupe',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste groupe type',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/grpe/groupe-type/list']
								  },
								  {
									label: 'Liste groupe etudiant',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/grpe/groupe-etudiant/list']
								  },
								  {
									label: 'Liste groupe etude',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/grpe/groupe-etude/list']
								  },
								  {
									label: 'Liste inscription',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/grpe/inscription/list']
								  },
								  {
									label: 'Liste groupe etat',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/grpe/groupe-etat/list']
								  },
						]
					  },
					  {
						label: 'Gestion Inscription Referentiel',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste fonction',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscriptionref/fonction/list']
								  },
								  {
									label: 'Liste statut social',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscriptionref/statut-social/list']
								  },
								  {
									label: 'Liste teacher locality',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscriptionref/teacher-locality/list']
								  },
								  {
									label: 'Liste skill',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscriptionref/skill/list']
								  },
								  {
									label: 'Liste niveau etude',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscriptionref/niveau-etude/list']
								  },
								  {
									label: 'Liste etat inscription',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscriptionref/etat-inscription/list']
								  },
								  {
									label: 'Liste langue',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscriptionref/langue/list']
								  },
								  {
									label: 'Liste confirmation token',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscriptionref/confirmation-token/list']
								  },
								  {
									label: 'Liste etudiant review',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscriptionref/etudiant-review/list']
								  },
								  {
									label: 'Liste interet etudiant',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscriptionref/interet-etudiant/list']
								  },
						]
					  },
					  {
						label: 'Gestion Quiz Etudiant',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste reponse etudiant',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/quizetudiant/reponse-etudiant/list']
								  },
								  {
									label: 'Liste quiz etudiant',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/quizetudiant/quiz-etudiant/list']
								  },
						]
					  },
					  {
						label: 'Gestion Review',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste prof review',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/review/prof-review/list']
								  },
						]
					  },
					  {
						label: 'Gestion Schedule',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste etat etudiant schedule',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscriptionref/etat-etudiant-schedule/list']
								  },
						]
					  },
					  {
						label: 'Asssociation Prof Cours',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste etudiant cours',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/profetudiantcours/etudiant-cours/list']
								  },
						]
					  },
					  {
						label: 'Gestion Commande',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste admin',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/alc/admin/list']
								  },
						]
					  },
					  {
						label: 'Gestion Cours Referentiel',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste etat cours',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/courseref/etat-cours/list']
								  },
								  {
									label: 'Liste super categorie section',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/courseref/super-categorie-section/list']
								  },
								  {
									label: 'Liste categorie section',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/courseref/categorie-section/list']
								  },
								  {
									label: 'Liste centre',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/courseref/centre/list']
								  },
								  {
									label: 'Liste level test configuration',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/courseref/level-test-configuration/list']
								  },
						]
					  },
					  {
						label: 'Gestion Free Trial',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste free trial detail',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/freetrial/free-trial-detail/list']
								  },
								  {
									label: 'Liste free trial configuration',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/freetrial/free-trial-configuration/list']
								  },
								  {
									label: 'Liste services',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/freetrial/services/list']
								  },
								  {
									label: 'Liste free trial student whats template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/freetrial/free-trial-student-whats-template/list']
								  },
								  {
									label: 'Liste free trialformule',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/freetrial/free-trialformule/list']
								  },
								  {
									label: 'Liste free trial teacher email template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/freetrial/free-trial-teacher-email-template/list']
								  },
								  {
									label: 'Liste free trial',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/freetrial/free-trial/list']
								  },
								  {
									label: 'Liste statut free trial',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/freetrial/statut-free-trial/list']
								  },
								  {
									label: 'Liste free trial student email template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/freetrial/free-trial-student-email-template/list']
								  },
								  {
									label: 'Liste free trial teacher whats template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/freetrial/free-trial-teacher-whats-template/list']
								  },
						]
					  },
					  {
						label: 'Gestion Common',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste contact',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/common/contact/list']
								  },
								  {
									label: 'Liste class average bonus',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/common/class-average-bonus/list']
								  },
								  {
									label: 'Liste news',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/common/news/list']
								  },
						]
					  },
					  {
						label: 'Gestion Vocabulary',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste vocabulary quiz',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/vocab/vocabulary-quiz/list']
								  },
								  {
									label: 'Liste vocabulary',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/vocab/vocabulary/list']
								  },
						]
					  },
					  {
						label: 'Gestion Price',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste price',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/price/price/list']
								  },
						]
					  },
					  {
						label: 'Gestion Etude',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste session cours',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/learning/session-cours/list']
								  },
						]
					  },
					  {
						label: 'Gestion Homework',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste howe work q s t reponse',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/homework/howe-work-q-s-t-reponse/list']
								  },
								  {
									label: 'Liste home work',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/homework/home-work/list']
								  },
								  {
									label: 'Liste home work etudiant',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/homework/home-work-etudiant/list']
								  },
								  {
									label: 'Liste type home work',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/homework/type-home-work/list']
								  },
								  {
									label: 'Liste home work question',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/homework/home-work-question/list']
								  },
								  {
									label: 'Liste reponse etudiant home work',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/homework/reponse-etudiant-home-work/list']
								  },
						]
					  },
					  {
						label: 'Gestion Quiz',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste question',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/quiz/question/list']
								  },
								  {
									label: 'Liste quiz',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/quiz/quiz/list']
								  },
								  {
									label: 'Liste reponse',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/quiz/reponse/list']
								  },
						]
					  },
					  {
						label: 'Gestion Quiz Referentiel',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste type de question',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/quizref/type-de-question/list']
								  },
						]
					  },
					  {
						label: 'Gestion Inscription',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste dictionary',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscription/dictionary/list']
								  },
								  {
									label: 'Liste etudiant',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscription/etudiant/list']
								  },
						]
					  },
					  {
						label: 'Gestion Paiement',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste paiement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/paiement/paiement/list']
								  },
						]
					  },
					  {
						label: 'Recommendation/Reclamation',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste recommend teacher',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/recomrecla/recommend-teacher/list']
								  },
								  {
									label: 'Liste type reclamation etudiant',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/recomrecla/type-reclamation-etudiant/list']
								  },
								  {
									label: 'Liste reclamation prof',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/recomrecla/reclamation-prof/list']
								  },
								  {
									label: 'Liste reclamation etudiant',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/recomrecla/reclamation-etudiant/list']
								  },
								  {
									label: 'Liste type reclamation prof',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/recomrecla/type-reclamation-prof/list']
								  },
						]
					  },
					  {
						label: 'Gestion Salaire',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste workload bonus',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/salary/workload-bonus/list']
								  },
								  {
									label: 'Liste workload bonus prof',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/salary/workload-bonus-prof/list']
								  },
								  {
									label: 'Liste salary',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/salary/salary/list']
								  },
						]
					  },
					  {
						label: 'Gestion ClassRoom',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste class room',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/classroom/class-room/list']
								  },
						]
					  },
					  {
						label: 'Gestion Faq',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste faq etudiant',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/faq/faq-etudiant/list']
								  },
								  {
									label: 'Liste faq prof',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/faq/faq-prof/list']
								  },
								  {
									label: 'Liste faq type',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/faq/faq-type/list']
								  },
								  {
									label: 'Liste faq',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/faq/faq/list']
								  },
						]
					  },
					  {
						label: 'Gestion Pack',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste pack student',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/pack/pack-student/list']
								  },
						]
					  },
					  {
						label: 'Gestion Prof',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste schedule prof',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/prof/schedule-prof/list']
								  },
								  {
									label: 'Liste tranche horaire prof',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/prof/tranche-horaire-prof/list']
								  },
								  {
									label: 'Liste class average bonus prof',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/prof/class-average-bonus-prof/list']
								  },
								  {
									label: 'Liste prof',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/prof/prof/list']
								  },
								  {
									label: 'Liste calendrier prof',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/prof/calendrier-prof/list']
								  },
								  {
									label: 'Liste categorie prof',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/prof/categorie-prof/list']
								  },
								  {
									label: 'Liste type teacher',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/prof/type-teacher/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];

        if (this.authService.authenticated) {
            if (this.authService.authenticatedUser.roleUsers) {
              this.authService.authenticatedUser.roleUsers.forEach(role => {
                  const roleName: string = this.getRole(role.role.authority);
                  this.roleService._role.next(roleName.toUpperCase());
                  eval('this.model = this.model' + this.getRole(role.role.authority));
              })
            }
        }
  }

    getRole(text){
        const [role, ...rest] = text.split('_');
        return this.upperCaseFirstLetter(rest.join(''));
    }

    upperCaseFirstLetter(word: string) {
      if (!word) { return word; }
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
