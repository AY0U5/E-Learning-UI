import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ReponseEtudiantAdminService} from 'src/app/shared/service/admin/quizetudiant/ReponseEtudiantAdmin.service';
import {ReponseEtudiantDto} from 'src/app/shared/model/quizetudiant/ReponseEtudiant.model';
import {ReponseEtudiantCriteria} from 'src/app/shared/criteria/quizetudiant/ReponseEtudiantCriteria.model';
import {QuizEtudiantDto} from 'src/app/shared/model/quizetudiant/QuizEtudiant.model';
import {QuizEtudiantAdminService} from 'src/app/shared/service/admin/quizetudiant/QuizEtudiantAdmin.service';
import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionAdminService} from 'src/app/shared/service/admin/quiz/QuestionAdmin.service';
import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseAdminService} from 'src/app/shared/service/admin/quiz/ReponseAdmin.service';
@Component({
  selector: 'app-reponse-etudiant-create-admin',
  templateUrl: './reponse-etudiant-create-admin.component.html'
})
export class ReponseEtudiantCreateAdminComponent extends AbstractCreateController<ReponseEtudiantDto, ReponseEtudiantCriteria, ReponseEtudiantAdminService>  implements OnInit {



   private _validReponseEtudiantRef = true;
    private _validReponseRef = true;
    private _validReponseLib = true;
    private _validQuizEtudiantRef = true;
    private _validQuestionRef = true;

    constructor( private reponseEtudiantService: ReponseEtudiantAdminService , private quizEtudiantService: QuizEtudiantAdminService, private questionService: QuestionAdminService, private reponseService: ReponseAdminService) {
        super(reponseEtudiantService);
    }

    ngOnInit(): void {
        this.reponse = new ReponseDto();
        this.reponseService.findAll().subscribe((data) => this.reponses = data);
        this.quizEtudiant = new QuizEtudiantDto();
        this.quizEtudiantService.findAll().subscribe((data) => this.quizEtudiants = data);
        this.question = new QuestionDto();
        this.questionService.findAll().subscribe((data) => this.questions = data);
    }





    public override setValidation(value: boolean){
        this.validReponseEtudiantRef = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateReponseEtudiantRef();
    }

    public validateReponseEtudiantRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validReponseEtudiantRef = false;
        } else {
            this.validReponseEtudiantRef = true;
        }
    }


    public async openCreateQuizEtudiant(quizEtudiant: string) {
    const isPermistted = await this.roleService.isPermitted('QuizEtudiant', 'add');
    if(isPermistted) {
         this.quizEtudiant = new QuizEtudiantDto();
         this.createQuizEtudiantDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get reponse(): ReponseDto {
        return this.reponseService.item;
    }
    set reponse(value: ReponseDto) {
        this.reponseService.item = value;
    }
    get reponses(): Array<ReponseDto> {
        return this.reponseService.items;
    }
    set reponses(value: Array<ReponseDto>) {
        this.reponseService.items = value;
    }
    get createReponseDialog(): boolean {
       return this.reponseService.createDialog;
    }
    set createReponseDialog(value: boolean) {
        this.reponseService.createDialog= value;
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
    get quizEtudiant(): QuizEtudiantDto {
        return this.quizEtudiantService.item;
    }
    set quizEtudiant(value: QuizEtudiantDto) {
        this.quizEtudiantService.item = value;
    }
    get quizEtudiants(): Array<QuizEtudiantDto> {
        return this.quizEtudiantService.items;
    }
    set quizEtudiants(value: Array<QuizEtudiantDto>) {
        this.quizEtudiantService.items = value;
    }
    get createQuizEtudiantDialog(): boolean {
       return this.quizEtudiantService.createDialog;
    }
    set createQuizEtudiantDialog(value: boolean) {
        this.quizEtudiantService.createDialog= value;
    }



    get validReponseEtudiantRef(): boolean {
        return this._validReponseEtudiantRef;
    }

    set validReponseEtudiantRef(value: boolean) {
         this._validReponseEtudiantRef = value;
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
    get validQuizEtudiantRef(): boolean {
        return this._validQuizEtudiantRef;
    }
    set validQuizEtudiantRef(value: boolean) {
        this._validQuizEtudiantRef = value;
    }
    get validQuestionRef(): boolean {
        return this._validQuestionRef;
    }
    set validQuestionRef(value: boolean) {
        this._validQuestionRef = value;
    }


}
