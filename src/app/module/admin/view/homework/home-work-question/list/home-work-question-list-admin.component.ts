import {Component, OnInit} from '@angular/core';
import {HomeWorkQuestionAdminService} from 'src/app/shared/service/admin/homework/HomeWorkQuestionAdmin.service';
import {HomeWorkQuestionDto} from 'src/app/shared/model/homework/HomeWorkQuestion.model';
import {HomeWorkQuestionCriteria} from 'src/app/shared/criteria/homework/HomeWorkQuestionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {HoweWorkQSTReponseDto} from 'src/app/shared/model/homework/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseAdminService} from 'src/app/shared/service/admin/homework/HoweWorkQSTReponseAdmin.service';
import {TypeDeQuestionDto} from 'src/app/shared/model/quizref/TypeDeQuestion.model';
import {TypeDeQuestionAdminService} from 'src/app/shared/service/admin/quizref/TypeDeQuestionAdmin.service';
import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkAdminService} from 'src/app/shared/service/admin/homework/HomeWorkAdmin.service';


@Component({
  selector: 'app-home-work-question-list-admin',
  templateUrl: './home-work-question-list-admin.component.html'
})
export class HomeWorkQuestionListAdminComponent extends AbstractListController<HomeWorkQuestionDto, HomeWorkQuestionCriteria, HomeWorkQuestionAdminService>  implements OnInit {

    override fileName = 'HomeWorkQuestion';


    typeDeQuestions: Array<TypeDeQuestionDto>;
    homeWorks: Array<HomeWorkDto>;


    constructor( private homeWorkQuestionService: HomeWorkQuestionAdminService  , private howeWorkQSTReponseService: HoweWorkQSTReponseAdminService, private typeDeQuestionService: TypeDeQuestionAdminService, private homeWorkService: HomeWorkAdminService) {
        super(homeWorkQuestionService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('HomeWorkQuestion').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadTypeDeQuestion();
                this.loadHomeWork();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'numero', header: 'Numero'},
            {field: 'pointReponseJuste', header: 'Point reponse juste'},
            {field: 'pointReponsefausse', header: 'Point reponsefausse'},
            {field: 'typeDeQuestion?.lib', header: 'Type de question'},
            {field: 'homeWork?.libelle', header: 'Home work'},
        ];
    }


    public async loadTypeDeQuestion(){
       this.typeDeQuestionService.findAllOptimized().subscribe(typeDeQuestions => this.typeDeQuestions = typeDeQuestions, error => console.log(error))
    }
    public async loadHomeWork(){
       this.homeWorkService.findAllOptimized().subscribe(homeWorks => this.homeWorks = homeWorks, error => console.log(error))
    }

	public override initDuplicate(res: HomeWorkQuestionDto) {
        if (res.howeWorkQSTReponses != null) {
             res.howeWorkQSTReponses.forEach(d => { d.homeWorkQuestion = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Numero': e.numero ,
                 'Point reponse juste': e.pointReponseJuste ,
                 'Point reponsefausse': e.pointReponsefausse ,
                'Type de question': e.typeDeQuestion?.lib ,
                'Home work': e.homeWork?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Numero Min': this.criteria.numeroMin ? this.criteria.numeroMin : environment.emptyForExport ,
            'Numero Max': this.criteria.numeroMax ? this.criteria.numeroMax : environment.emptyForExport ,
            'Point reponse juste Min': this.criteria.pointReponseJusteMin ? this.criteria.pointReponseJusteMin : environment.emptyForExport ,
            'Point reponse juste Max': this.criteria.pointReponseJusteMax ? this.criteria.pointReponseJusteMax : environment.emptyForExport ,
            'Point reponsefausse Min': this.criteria.pointReponsefausseMin ? this.criteria.pointReponsefausseMin : environment.emptyForExport ,
            'Point reponsefausse Max': this.criteria.pointReponsefausseMax ? this.criteria.pointReponsefausseMax : environment.emptyForExport ,
        //'Type de question': this.criteria.typeDeQuestion?.lib ? this.criteria.typeDeQuestion?.lib : environment.emptyForExport ,
        //'Home work': this.criteria.homeWork?.libelle ? this.criteria.homeWork?.libelle : environment.emptyForExport ,
        }];
      }
}
