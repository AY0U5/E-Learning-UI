import {Component, OnInit} from '@angular/core';
import {HomeWorkEtudiantAdminService} from 'src/app/shared/service/admin/homework/HomeWorkEtudiantAdmin.service';
import {HomeWorkEtudiantDto} from 'src/app/shared/model/homework/HomeWorkEtudiant.model';
import {HomeWorkEtudiantCriteria} from 'src/app/shared/criteria/homework/HomeWorkEtudiantCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {HoweWorkQSTReponseDto} from 'src/app/shared/model/homework/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseAdminService} from 'src/app/shared/service/admin/homework/HoweWorkQSTReponseAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {ReponseEtudiantHomeWorkDto} from 'src/app/shared/model/homework/ReponseEtudiantHomeWork.model';
import {ReponseEtudiantHomeWorkAdminService} from 'src/app/shared/service/admin/homework/ReponseEtudiantHomeWorkAdmin.service';
import {HomeWorkQuestionDto} from 'src/app/shared/model/homework/HomeWorkQuestion.model';
import {HomeWorkQuestionAdminService} from 'src/app/shared/service/admin/homework/HomeWorkQuestionAdmin.service';
import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkAdminService} from 'src/app/shared/service/admin/homework/HomeWorkAdmin.service';


@Component({
  selector: 'app-home-work-etudiant-list-admin',
  templateUrl: './home-work-etudiant-list-admin.component.html'
})
export class HomeWorkEtudiantListAdminComponent extends AbstractListController<HomeWorkEtudiantDto, HomeWorkEtudiantCriteria, HomeWorkEtudiantAdminService>  implements OnInit {

    override fileName = 'HomeWorkEtudiant';


    etudiants: Array<EtudiantDto>;
    homeWorks: Array<HomeWorkDto>;


    constructor( private homeWorkEtudiantService: HomeWorkEtudiantAdminService  , private howeWorkQSTReponseService: HoweWorkQSTReponseAdminService, private etudiantService: EtudiantAdminService, private reponseEtudiantHomeWorkService: ReponseEtudiantHomeWorkAdminService, private homeWorkQuestionService: HomeWorkQuestionAdminService, private homeWorkService: HomeWorkAdminService) {
        super(homeWorkEtudiantService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('HomeWorkEtudiant').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEtudiant();
                this.loadHomeWork();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'homeWork?.libelle', header: 'Home work'},
            {field: 'note', header: 'Note'},
            {field: 'resultat', header: 'Resultat'},
            {field: 'dateHomeWork', header: 'Date home work'},
        ];
    }


    public async loadEtudiant(){
       this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants, error => console.log(error))
    }
    public async loadHomeWork(){
       this.homeWorkService.findAllOptimized().subscribe(homeWorks => this.homeWorks = homeWorks, error => console.log(error))
    }

	public override initDuplicate(res: HomeWorkEtudiantDto) {
        if (res.reponseEtudiantHomeWorks != null) {
             res.reponseEtudiantHomeWorks.forEach(d => { d.homeWorkEtudiant = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Etudiant': e.etudiant?.ref ,
                'Home work': e.homeWork?.libelle ,
                 'Note': e.note ,
                 'Resultat': e.resultat ,
                'Date home work': this.datePipe.transform(e.dateHomeWork , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Home work': this.criteria.homeWork?.libelle ? this.criteria.homeWork?.libelle : environment.emptyForExport ,
            'Note Min': this.criteria.noteMin ? this.criteria.noteMin : environment.emptyForExport ,
            'Note Max': this.criteria.noteMax ? this.criteria.noteMax : environment.emptyForExport ,
            'Resultat': this.criteria.resultat ? this.criteria.resultat : environment.emptyForExport ,
            'Date home work Min': this.criteria.dateHomeWorkFrom ? this.datePipe.transform(this.criteria.dateHomeWorkFrom , this.dateFormat) : environment.emptyForExport ,
            'Date home work Max': this.criteria.dateHomeWorkTo ? this.datePipe.transform(this.criteria.dateHomeWorkTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
