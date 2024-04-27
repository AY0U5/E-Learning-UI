import {Component, OnInit} from '@angular/core';
import {SessionCoursAdminService} from 'src/app/shared/service/admin/learning/SessionCoursAdmin.service';
import {SessionCoursDto} from 'src/app/shared/model/learning/SessionCours.model';
import {SessionCoursCriteria} from 'src/app/shared/criteria/learning/SessionCoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {SalaryDto} from 'src/app/shared/model/salary/Salary.model';
import {SalaryAdminService} from 'src/app/shared/service/admin/salary/SalaryAdmin.service';
import {GroupeEtudiantDto} from 'src/app/shared/model/grpe/GroupeEtudiant.model';
import {GroupeEtudiantAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantAdmin.service';
import {SessionCoursSectionDto} from 'src/app/shared/model/learning/SessionCoursSection.model';
import {SessionCoursSectionAdminService} from 'src/app/shared/service/admin/learning/SessionCoursSectionAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';


@Component({
  selector: 'app-session-cours-list-admin',
  templateUrl: './session-cours-list-admin.component.html'
})
export class SessionCoursListAdminComponent extends AbstractListController<SessionCoursDto, SessionCoursCriteria, SessionCoursAdminService>  implements OnInit {

    override fileName = 'SessionCours';


     yesOrNoPayer: any[] = [];
    profs: Array<ProfDto>;
    courss: Array<CoursDto>;
    groupeEtudiants: Array<GroupeEtudiantDto>;
    salarys: Array<SalaryDto>;


    constructor( private sessionCoursService: SessionCoursAdminService  , private salaryService: SalaryAdminService, private groupeEtudiantService: GroupeEtudiantAdminService, private sessionCoursSectionService: SessionCoursSectionAdminService, private sectionService: SectionAdminService, private coursService: CoursAdminService, private profService: ProfAdminService) {
        super(sessionCoursService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('SessionCours').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadProf();
                this.loadCours();
                this.loadGroupeEtudiant();
                this.loadSalary();
                this.yesOrNoPayer =  [{label: 'Payer', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'groupeEtudiant?.id', header: 'Groupe etudiant'},
            {field: 'duree', header: 'Duree'},
            {field: 'totalheure', header: 'Totalheure'},
            {field: 'mois', header: 'Mois'},
            {field: 'annee', header: 'Annee'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'payer', header: 'Payer'},
            {field: 'salary?.code', header: 'Salary'},
        ];
    }


    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }
    public async loadCours(){
       this.coursService.findAllOptimized().subscribe(courss => this.courss = courss, error => console.log(error))
    }
    public async loadGroupeEtudiant(){
       this.groupeEtudiantService.findAll().subscribe(groupeEtudiants => this.groupeEtudiants = groupeEtudiants, error => console.log(error))
    }
    public async loadSalary(){
       this.salaryService.findAllOptimized().subscribe(salarys => this.salarys = salarys, error => console.log(error))
    }

	public override initDuplicate(res: SessionCoursDto) {
        if (res.sessionCoursSections != null) {
             res.sessionCoursSections.forEach(d => { d.sessionCours = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Prof': e.prof?.ref ,
                'Cours': e.cours?.libelle ,
                'Groupe etudiant': e.groupeEtudiant?.id ,
                 'Duree': e.duree ,
                 'Totalheure': e.totalheure ,
                 'Mois': e.mois ,
                 'Annee': e.annee ,
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
                'Date debut': this.datePipe.transform(e.dateDebut , 'dd/MM/yyyy hh:mm'),
                'Payer': e.payer? 'Vrai' : 'Faux' ,
                'Salary': e.salary?.code ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
        //'Groupe etudiant': this.criteria.groupeEtudiant?.id ? this.criteria.groupeEtudiant?.id : environment.emptyForExport ,
            'Duree Min': this.criteria.dureeMin ? this.criteria.dureeMin : environment.emptyForExport ,
            'Duree Max': this.criteria.dureeMax ? this.criteria.dureeMax : environment.emptyForExport ,
            'Totalheure Min': this.criteria.totalheureMin ? this.criteria.totalheureMin : environment.emptyForExport ,
            'Totalheure Max': this.criteria.totalheureMax ? this.criteria.totalheureMax : environment.emptyForExport ,
            'Mois Min': this.criteria.moisMin ? this.criteria.moisMin : environment.emptyForExport ,
            'Mois Max': this.criteria.moisMax ? this.criteria.moisMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Payer': this.criteria.payer ? (this.criteria.payer ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        //'Salary': this.criteria.salary?.code ? this.criteria.salary?.code : environment.emptyForExport ,
        }];
      }
}
