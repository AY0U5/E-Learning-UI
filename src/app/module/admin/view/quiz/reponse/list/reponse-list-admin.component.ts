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
  templateUrl: './reponse-list-admin.component.html',
    styleUrls:['reponse-list-admin.component.css']
})
export class ReponseListAdminComponent extends AbstractListController<ReponseDto, ReponseCriteria, ReponseAdminService>  implements OnInit {

    override fileName = 'Reponse';


    questions: Array<QuestionDto>;


    //

    public set itemsRepForQuest(value: Array<ReponseDto>) {
        this.reponseService.itemsRepForQuest = value;
    }

    public get itemsRepForQuest(): Array<ReponseDto> {
        return this.reponseService.itemsRepForQuest;
    }
    get itemReponse(): ReponseDto {
        return this.reponseService.item;
    }

    set itemReponse(value: ReponseDto) {
        this.reponseService.item = value;
    }


    //

    get showreponsenbr(): boolean {
        return this.service.showreponsenbr;
    }

    set showreponsenbr(value: boolean) {
        this.service.showreponsenbr = value;
    }

    get reponsenbr(): number {
        return this.service.reponsenbr;
    }

    set reponsenbr(value: number) {
        this.service.reponsenbr = value;
    }


    //

    get reponseCourte(): boolean {
        return this.reponseService.reponseCourte;
    }
    set reponseCourte(value: boolean) {
        this.reponseService.reponseCourte = value;
    }
    get paragraphe(): boolean {
        return this.reponseService.paragraphe;
    }

    set paragraphe(value: boolean) {
        this.reponseService.paragraphe = value;
    }

    get caseAcoche(): boolean {
        return this.reponseService.caseAcoche;
    }

    set caseAcoche(value: boolean) {
        this.reponseService.caseAcoche = value;
    }

    get choixMultiple(): boolean {
        return this.reponseService.choixMultiple;
    }

    set choixMultiple(value: boolean) {
        this.reponseService.choixMultiple = value;
    }


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
