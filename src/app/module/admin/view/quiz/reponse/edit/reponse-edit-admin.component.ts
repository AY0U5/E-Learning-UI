import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ReponseAdminService} from 'src/app/shared/service/admin/quiz/ReponseAdmin.service';
import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseCriteria} from 'src/app/shared/criteria/quiz/ReponseCriteria.model';


import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionAdminService} from 'src/app/shared/service/admin/quiz/QuestionAdmin.service';

@Component({
  selector: 'app-reponse-edit-admin',
  templateUrl: './reponse-edit-admin.component.html'
})
export class ReponseEditAdminComponent extends AbstractEditController<ReponseDto, ReponseCriteria, ReponseAdminService>   implements OnInit {


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
        const isPermistted = await this.roleService.isPermitted('Question', 'edit');
        if (isPermistted) {
             this.question = new QuestionDto();
             this.createQuestionDialog = true;
        }else {
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
