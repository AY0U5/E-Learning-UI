import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ReponseAdminService} from 'src/app/shared/service/admin/quiz/ReponseAdmin.service';
import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseCriteria} from 'src/app/shared/criteria/quiz/ReponseCriteria.model';
import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionAdminService} from 'src/app/shared/service/admin/quiz/QuestionAdmin.service';
@Component({
  selector: 'app-reponse-create-admin',
  templateUrl: './reponse-create-admin.component.html',
    styleUrls : ['./reponse-create-admin.component.css']
})
export class ReponseCreateAdminComponent extends AbstractCreateController<ReponseDto, ReponseCriteria, ReponseAdminService>  implements OnInit {

    //
    get itemReponse(): ReponseDto {
        return this.reponseService.item;
    }

    set itemReponse(value: ReponseDto) {
        this.reponseService.item = value;
    }
    public get itemQuestionshow(): QuestionDto {
        return this.questionService.itemQuestionshow;
    }

    public set itemQuestionshow(value: QuestionDto) {
        this.questionService.itemQuestionshow = value;
    }
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
    public saveWithShowOptionReponse(showList: boolean) {
       /* this.service.save().subscribe(item => {
            if (item != null) {
                this.itemsOfQuiz.push({...item});
                // this.createDialog = false;
                // this.submitted = false;
                // this.addquiz = true;
                this.item = this.service.constrcutDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });*/
    }
    public set itemsRepForQuest(value: Array<ReponseDto>) {
        this.reponseService.itemsRepForQuest = value;
    }

    public get itemsRepForQuest(): Array<ReponseDto> {
        return this.reponseService.itemsRepForQuest;
    }
    foraddReponsetoQuestion() {
        console.log('foraddReponsetoQuestion called');
        console.log(this.itemsRepForQuest);
        if (!this.stringUtilService.isEmpty(this.itemReponse.lib) && !this.stringUtilService.isEmpty(this.itemReponse.etatReponse)) {


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
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }
    //




   private _validReponseRef = true;
   private _validReponseLib = true;
    private _validQuestionRef = true;

    constructor( private reponseService: ReponseAdminService , private questionService: QuestionAdminService) {
        super(reponseService);
    }

    ngOnInit(): void {
        this.question = new QuestionDto();
        this.questionService.findAll().subscribe((data) => this.questions = data);
    }





    public override setValidation(value: boolean){
        this.validReponseRef = value;
        this.validReponseLib = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateReponseRef();
        this.validateReponseLib();
    }

    public validateReponseRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validReponseRef = false;
        } else {
            this.validReponseRef = true;
        }
    }
    public validateReponseLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
        this.errorMessages.push('Lib non valide');
        this.validReponseLib = false;
        } else {
            this.validReponseLib = true;
        }
    }


    public async openCreateQuestion(question: string) {
    const isPermistted = await this.roleService.isPermitted('Question', 'add');
    if(isPermistted) {
         this.question = new QuestionDto();
         this.createQuestionDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get question(): QuestionDto {
        return this.questionService.item;
    }
    set question(value: QuestionDto) {
        this.questionService.item = value;
    }
    get questions(): Array<QuestionDto> {
        return this.questionService.items;
    }
    set questions(value: Array<QuestionDto>) {
        this.questionService.items = value;
    }
    get createQuestionDialog(): boolean {
       return this.questionService.createDialog;
    }
    set createQuestionDialog(value: boolean) {
        this.questionService.createDialog= value;
    }



    get validReponseRef(): boolean {
        return this._validReponseRef;
    }

    set validReponseRef(value: boolean) {
         this._validReponseRef = value;
    }
    get validReponseLib(): boolean {
        return this._validReponseLib;
    }

    set validReponseLib(value: boolean) {
         this._validReponseLib = value;
    }

    get validQuestionRef(): boolean {
        return this._validQuestionRef;
    }
    set validQuestionRef(value: boolean) {
        this._validQuestionRef = value;
    }



}
