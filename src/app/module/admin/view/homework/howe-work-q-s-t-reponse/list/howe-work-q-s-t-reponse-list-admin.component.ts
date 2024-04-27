import {Component, OnInit} from '@angular/core';
import {HoweWorkQSTReponseAdminService} from 'src/app/shared/service/admin/homework/HoweWorkQSTReponseAdmin.service';
import {HoweWorkQSTReponseDto} from 'src/app/shared/model/homework/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseCriteria} from 'src/app/shared/criteria/homework/HoweWorkQSTReponseCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {HomeWorkQuestionDto} from 'src/app/shared/model/homework/HomeWorkQuestion.model';
import {HomeWorkQuestionAdminService} from 'src/app/shared/service/admin/homework/HomeWorkQuestionAdmin.service';


@Component({
  selector: 'app-howe-work-q-s-t-reponse-list-admin',
  templateUrl: './howe-work-q-s-t-reponse-list-admin.component.html'
})
export class HoweWorkQSTReponseListAdminComponent extends AbstractListController<HoweWorkQSTReponseDto, HoweWorkQSTReponseCriteria, HoweWorkQSTReponseAdminService>  implements OnInit {

    override fileName = 'HoweWorkQSTReponse';


    homeWorkQuestions: Array<HomeWorkQuestionDto>;


    constructor( private howeWorkQSTReponseService: HoweWorkQSTReponseAdminService  , private homeWorkQuestionService: HomeWorkQuestionAdminService) {
        super(howeWorkQSTReponseService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('HoweWorkQSTReponse').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadHomeWorkQuestion();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'lib', header: 'Lib'},
            {field: 'etatReponse', header: 'Etat reponse'},
            {field: 'numero', header: 'Numero'},
            {field: 'homeWorkQuestion?.libelle', header: 'Home work question'},
        ];
    }


    public async loadHomeWorkQuestion(){
       this.homeWorkQuestionService.findAllOptimized().subscribe(homeWorkQuestions => this.homeWorkQuestions = homeWorkQuestions, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Lib': e.lib ,
                 'Etat reponse': e.etatReponse ,
                 'Numero': e.numero ,
                'Home work question': e.homeWorkQuestion?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Lib': this.criteria.lib ? this.criteria.lib : environment.emptyForExport ,
            'Etat reponse': this.criteria.etatReponse ? this.criteria.etatReponse : environment.emptyForExport ,
            'Numero Min': this.criteria.numeroMin ? this.criteria.numeroMin : environment.emptyForExport ,
            'Numero Max': this.criteria.numeroMax ? this.criteria.numeroMax : environment.emptyForExport ,
        //'Home work question': this.criteria.homeWorkQuestion?.libelle ? this.criteria.homeWorkQuestion?.libelle : environment.emptyForExport ,
        }];
      }
}
