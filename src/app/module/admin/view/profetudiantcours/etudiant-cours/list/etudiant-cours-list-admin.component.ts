import {Component, OnInit} from '@angular/core';
import {EtudiantCoursAdminService} from 'src/app/shared/service/admin/profetudiantcours/EtudiantCoursAdmin.service';
import {EtudiantCoursDto} from 'src/app/shared/model/profetudiantcours/EtudiantCours.model';
import {EtudiantCoursCriteria} from 'src/app/shared/criteria/profetudiantcours/EtudiantCoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';


@Component({
  selector: 'app-etudiant-cours-list-admin',
  templateUrl: './etudiant-cours-list-admin.component.html'
})
export class EtudiantCoursListAdminComponent extends AbstractListController<EtudiantCoursDto, EtudiantCoursCriteria, EtudiantCoursAdminService>  implements OnInit {

    override fileName = 'EtudiantCours';


     yesOrNoPayer: any[] = [];
    etudiants: Array<EtudiantDto>;
    profs: Array<ProfDto>;
    courss: Array<CoursDto>;


    constructor( private etudiantCoursService: EtudiantCoursAdminService  , private etudiantService: EtudiantAdminService, private coursService: CoursAdminService, private profService: ProfAdminService) {
        super(etudiantCoursService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('EtudiantCours').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEtudiant();
                this.loadProf();
                this.loadCours();
                this.yesOrNoPayer =  [{label: 'Payer', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'payer', header: 'Payer'},
            {field: 'dateFin', header: 'Date fin'},
        ];
    }


    public async loadEtudiant(){
       this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants, error => console.log(error))
    }
    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }
    public async loadCours(){
       this.coursService.findAllOptimized().subscribe(courss => this.courss = courss, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Etudiant': e.etudiant?.ref ,
                'Prof': e.prof?.ref ,
                'Cours': e.cours?.libelle ,
                'Payer': e.payer? 'Vrai' : 'Faux' ,
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
            'Payer': this.criteria.payer ? (this.criteria.payer ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
