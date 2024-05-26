import {Component, OnInit} from '@angular/core';
import {ReponseAdminService} from 'src/app/shared/service/admin/quiz/ReponseAdmin.service';
import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseCriteria} from 'src/app/shared/criteria/quiz/ReponseCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionAdminService} from 'src/app/shared/service/admin/quiz/QuestionAdmin.service';
import {MessageService} from "primeng/api";
import {ServiceLocator} from "../../../../../../zynerator/service/ServiceLocator";


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


    constructor(private msgService: MessageService, private reponseService: ReponseAdminService  , private questionService: QuestionAdminService) {

        super(reponseService);
        this.msgService = ServiceLocator.injector.get(MessageService);

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

      //

    private saveReponse() {
        // this.itemQuestionshow = this.item;

        // this.saveWithShowOptionQuiz(false);
        // this.itemReponse.question = this.itemQuestionshow;
        let etat = this.itemReponse.etatReponse;
        this.itemsRepForQuest.push(this.itemReponse)
        this.itemReponse = new ReponseDto();
        this.itemReponse.etatReponse = etat;
        console.log(this.itemsRepForQuest);
        // this.saveWithShowOptionReponse(false)
        /* }else {
             this.messageService.add({
                 severity: 'error',
                 summary: 'Erreurs',
                 detail: 'Merci de corrigé les erreurs sur le formulaire'
             });
         }*/
    }
    protected _errorMessages = new Array<string>();

    get errorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    foraddReponsetoQuestion() {
        console.log('foraddReponsetoQuestion called');
        console.log(this.itemsRepForQuest);
        if (!this.isEmpty(this.itemReponse.lib) && !this.isEmpty(this.itemReponse.etatReponse)) {


            console.log(this.itemReponse)
            this.reponseService.findBylib(this.itemReponse).subscribe( res =>
                {
                    if (res == null){
                        this.saveReponse();
                    }/*else{
                        this.errorMessages = new Array<string>();
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Erreurs',
                            detail: 'la reponse deja ajouter'
                        });
                    }*//*else {
                        this.itemQuizShow = res;
                        this.addquiz = true;
                        this.showqst = true;
                        console.log(this.itemQuizShow);
                    }*/
                }

            )
            /*  if (this.checkquiz) {
                  this.saveQuiz();
                  this.showqst = true;
              }*/
        } else {
            this.errorMessages = new Array<string>();
            this.msgService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }
    isEmpty(value: string): boolean {
        return !value || value.trim().length === 0;
    }
    //

}
