import {Component, OnInit} from '@angular/core';
import {ReponseAdminService} from 'src/app/shared/service/admin/quiz/ReponseAdmin.service';
import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseCriteria} from 'src/app/shared/criteria/quiz/ReponseCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionAdminService} from 'src/app/shared/service/admin/quiz/QuestionAdmin.service';


@Component({
  selector: 'app-reponse-list-admin',
  templateUrl: './reponse-list-admin.component.html'
})
export class ReponseListAdminComponent extends AbstractListController<ReponseDto, ReponseCriteria, ReponseAdminService>  implements OnInit {

    override fileName = 'Reponse';


    questions: Array<QuestionDto>;


    constructor( private reponseService: ReponseAdminService  , private questionService: QuestionAdminService) {
        super(reponseService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Reponse').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadQuestion();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'lib', header: 'Lib'},
            {field: 'etatReponse', header: 'Etat reponse'},
            {field: 'numero', header: 'Numero'},
            {field: 'question?.libelle', header: 'Question'},
        ];
    }


    public async loadQuestion(){
       this.questionService.findAllOptimized().subscribe(questions => this.questions = questions, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Lib': e.lib ,
                 'Etat reponse': e.etatReponse ,
                 'Numero': e.numero ,
                'Question': e.question?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Lib': this.criteria.lib ? this.criteria.lib : environment.emptyForExport ,
            'Etat reponse': this.criteria.etatReponse ? this.criteria.etatReponse : environment.emptyForExport ,
            'Numero Min': this.criteria.numeroMin ? this.criteria.numeroMin : environment.emptyForExport ,
            'Numero Max': this.criteria.numeroMax ? this.criteria.numeroMax : environment.emptyForExport ,
        //'Question': this.criteria.question?.libelle ? this.criteria.question?.libelle : environment.emptyForExport ,
        }];
      }
}
