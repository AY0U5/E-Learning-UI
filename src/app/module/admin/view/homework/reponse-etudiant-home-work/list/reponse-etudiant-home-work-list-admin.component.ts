import {Component, OnInit} from '@angular/core';
import {ReponseEtudiantHomeWorkAdminService} from 'src/app/shared/service/admin/homework/ReponseEtudiantHomeWorkAdmin.service';
import {ReponseEtudiantHomeWorkDto} from 'src/app/shared/model/homework/ReponseEtudiantHomeWork.model';
import {ReponseEtudiantHomeWorkCriteria} from 'src/app/shared/criteria/homework/ReponseEtudiantHomeWorkCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {HoweWorkQSTReponseDto} from 'src/app/shared/model/homework/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseAdminService} from 'src/app/shared/service/admin/homework/HoweWorkQSTReponseAdmin.service';
import {HomeWorkEtudiantDto} from 'src/app/shared/model/homework/HomeWorkEtudiant.model';
import {HomeWorkEtudiantAdminService} from 'src/app/shared/service/admin/homework/HomeWorkEtudiantAdmin.service';
import {HomeWorkQuestionDto} from 'src/app/shared/model/homework/HomeWorkQuestion.model';
import {HomeWorkQuestionAdminService} from 'src/app/shared/service/admin/homework/HomeWorkQuestionAdmin.service';


@Component({
  selector: 'app-reponse-etudiant-home-work-list-admin',
  templateUrl: './reponse-etudiant-home-work-list-admin.component.html'
})
export class ReponseEtudiantHomeWorkListAdminComponent extends AbstractListController<ReponseEtudiantHomeWorkDto, ReponseEtudiantHomeWorkCriteria, ReponseEtudiantHomeWorkAdminService>  implements OnInit {

    override fileName = 'ReponseEtudiantHomeWork';


    howeWorkQSTReponses: Array<HoweWorkQSTReponseDto>;
    homeWorkEtudiants: Array<HomeWorkEtudiantDto>;
    homeWorkQuestions: Array<HomeWorkQuestionDto>;


    constructor( private reponseEtudiantHomeWorkService: ReponseEtudiantHomeWorkAdminService  , private howeWorkQSTReponseService: HoweWorkQSTReponseAdminService, private homeWorkEtudiantService: HomeWorkEtudiantAdminService, private homeWorkQuestionService: HomeWorkQuestionAdminService) {
        super(reponseEtudiantHomeWorkService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('ReponseEtudiantHomeWork').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadHoweWorkQSTReponse();
                this.loadHomeWorkEtudiant();
                this.loadHomeWorkQuestion();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'howeWorkQSTReponse?.lib', header: 'Howe work q s t reponse'},
            {field: 'answer', header: 'Answer'},
            {field: 'homeWorkEtudiant?.id', header: 'Home work etudiant'},
            {field: 'homeWorkQuestion?.libelle', header: 'Home work question'},
            {field: 'profNote', header: 'Prof note'},
            {field: 'note', header: 'Note'},
        ];
    }


    public async loadHoweWorkQSTReponse(){
       this.howeWorkQSTReponseService.findAllOptimized().subscribe(howeWorkQSTReponses => this.howeWorkQSTReponses = howeWorkQSTReponses, error => console.log(error))
    }
    public async loadHomeWorkEtudiant(){
       this.homeWorkEtudiantService.findAll().subscribe(homeWorkEtudiants => this.homeWorkEtudiants = homeWorkEtudiants, error => console.log(error))
    }
    public async loadHomeWorkQuestion(){
       this.homeWorkQuestionService.findAllOptimized().subscribe(homeWorkQuestions => this.homeWorkQuestions = homeWorkQuestions, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Howe work q s t reponse': e.howeWorkQSTReponse?.lib ,
                 'Answer': e.answer ,
                'Home work etudiant': e.homeWorkEtudiant?.id ,
                'Home work question': e.homeWorkQuestion?.libelle ,
                 'Prof note': e.profNote ,
                 'Note': e.note ,
            }
        });

        this.criteriaData = [{
        //'Howe work q s t reponse': this.criteria.howeWorkQSTReponse?.lib ? this.criteria.howeWorkQSTReponse?.lib : environment.emptyForExport ,
            'Answer': this.criteria.answer ? this.criteria.answer : environment.emptyForExport ,
        //'Home work etudiant': this.criteria.homeWorkEtudiant?.id ? this.criteria.homeWorkEtudiant?.id : environment.emptyForExport ,
        //'Home work question': this.criteria.homeWorkQuestion?.libelle ? this.criteria.homeWorkQuestion?.libelle : environment.emptyForExport ,
            'Prof note': this.criteria.profNote ? this.criteria.profNote : environment.emptyForExport ,
            'Note Min': this.criteria.noteMin ? this.criteria.noteMin : environment.emptyForExport ,
            'Note Max': this.criteria.noteMax ? this.criteria.noteMax : environment.emptyForExport ,
        }];
      }
}
