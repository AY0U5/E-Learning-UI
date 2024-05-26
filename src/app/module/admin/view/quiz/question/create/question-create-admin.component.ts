import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {QuestionAdminService} from 'src/app/shared/service/admin/quiz/QuestionAdmin.service';
import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionCriteria} from 'src/app/shared/criteria/quiz/QuestionCriteria.model';
import {QuizDto} from 'src/app/shared/model/quiz/Quiz.model';
import {QuizAdminService} from 'src/app/shared/service/admin/quiz/QuizAdmin.service';
import {TypeDeQuestionDto} from 'src/app/shared/model/quizref/TypeDeQuestion.model';
import {TypeDeQuestionAdminService} from 'src/app/shared/service/admin/quizref/TypeDeQuestionAdmin.service';
import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseAdminService} from 'src/app/shared/service/admin/quiz/ReponseAdmin.service';
import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkAdminService} from 'src/app/shared/service/admin/homework/HomeWorkAdmin.service';
@Component({
  selector: 'app-question-create-admin',
  templateUrl: './question-create-admin.component.html',
    styleUrls : ['./question-create-admin.component.css']
})
export class QuestionCreateAdminComponent extends AbstractCreateController<QuestionDto, QuestionCriteria, QuestionAdminService>  implements OnInit {

    private _reponsesElement = new ReponseDto();


    private _validQuestionRef = true;
    private _validTypeDeQuestionRef = true;
    private _validTypeDeQuestionLib = true;
    private _validReponsesRef = true;
    private _validReponsesLib = true;
    private _validQuizRef = true;
    private _validQuizLib = true;
    private _validHomeWorkLibelle = true;

    //
    get itemsOfQuiz(): Array<QuestionDto> {
        return this.questionService.itemsOfQuiz;
    }

    set itemsOfQuiz(value: Array<QuestionDto>) {
        this.questionService.itemsOfQuiz = value;
    }

    public get itemQuizShow(): QuizDto {
        return this.quizService.itemQuizShow;
    }

    public set itemQuizShow(value: QuizDto) {
        this.quizService.itemQuizShow = value;
    }
    public get itemQuestionshow(): QuestionDto {
        return this.questionService.itemQuestionshow;
    }

    public set itemQuestionshow(value: QuestionDto) {
        this.questionService.itemQuestionshow = value;
    }
    public set itemsRepForQuest(value: Array<ReponseDto>) {
        this.reponseService.itemsRepForQuest = value;
    }

    public get itemsRepForQuest(): Array<ReponseDto> {
        return this.reponseService.itemsRepForQuest;
    }

    /*pour paragraphe and courte*/
    get itemReponse(): ReponseDto {
        return this.reponseService.item;
    }

    set itemReponse(value: ReponseDto) {
        this.reponseService.item = value;
    }
   public itemsforRepAndPara : Array<ReponseDto> ;

    public saveQuestion(): void {

        this.itemQuestionshow = this.item;

        // this.saveWithShowOptionQuiz(false);
        this.item.quiz = this.itemQuizShow;

        if(this.itemReponse.etatReponse == 'Reponse Courte' || this.itemReponse.etatReponse == 'Paragraphe' ){
            this.itemReponse.ref = this.item.ref;
            this.itemsRepForQuest.push(this.itemReponse);
        }
        this.item.reponses = this.itemsRepForQuest;
        console.log(this.itemsRepForQuest);
        // console.log(this.item.reponses);

        this.saveWithShowOptionQuestion(false)
        /* }else {
             this.messageService.add({
                 severity: 'error',
                 summary: 'Erreurs',
                 detail: 'Merci de corrigé les erreurs sur le formulaire'
             });
         }*/
    }

    public saveWithShowOptionQuestion(showList: boolean) {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.itemsOfQuiz.push({...item});
                // this.createDialog = false;
                // this.submitted = false;
                // this.addquiz = true;
                this.item = this.service.constrcutDto();
                this.itemsRepForQuest = new Array<ReponseDto>();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });
    }

    forMoreQuestion() {
        if (!this.stringUtilService.isEmpty(this.item.libelle) && this.item.typeDeQuestion != null) {
            if(this.stringUtilService.isEmpty(this.item.ref)){
                this.errorMessages = new Array<string>();
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreurs',
                    detail: 'Ajouter une reference pour la question'
                });
            }else {


                // console.log(this.item)
                this.questionService.findBylibelle(this.item).subscribe(res => {
                        if (res == null) {
                            this.saveQuestion();
                        }else {
                            this.errorMessages = new Array<string>();
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Erreurs',
                                detail: 'la question deja existe'
                            });
                        }
                        /*else {
                        this.itemQuizShow = res;
                        this.addquiz = true;
                        this.showqst = true;
                        console.log(this.itemQuizShow);
                    }*/
                    }
                )
            }
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

    constructor( private questionService: QuestionAdminService , private quizService: QuizAdminService, private typeDeQuestionService: TypeDeQuestionAdminService, private reponseService: ReponseAdminService, private homeWorkService: HomeWorkAdminService) {
        super(questionService);
    }

    ngOnInit(): void {
        this.typeDeQuestion = new TypeDeQuestionDto();
        this.typeDeQuestionService.findAll().subscribe((data) => this.typeDeQuestions = data);
        this.quiz = new QuizDto();
        this.quizService.findAll().subscribe((data) => this.quizs = data);
        this.homeWork = new HomeWorkDto();
        this.homeWorkService.findAll().subscribe((data) => this.homeWorks = data);
    }



    validateReponses(){
        this.errorMessages = new Array();
        this.validateReponsesRef();
        this.validateReponsesLib();
    }


    public override setValidation(value: boolean){
        this.validQuestionRef = value;
        this.validReponsesRef = value;
        this.validReponsesLib = value;
    }

    public addReponses() {
        if( this.item.reponses == null )
            this.item.reponses = new Array<ReponseDto>();
       this.validateReponses();
       if (this.errorMessages.length === 0) {
              this.item.reponses.push({... this.reponsesElement});
              this.reponsesElement = new ReponseDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletereponses(p: ReponseDto) {
        this.item.reponses.forEach((element, index) => {
            if (element === p) { this.item.reponses.splice(index, 1); }
        });
    }

    public editreponses(p: ReponseDto) {
        this.reponsesElement = {... p};
        this.activeTab = 0;
    }


    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateQuestionRef();
    }

    public validateQuestionRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validQuestionRef = false;
        } else {
            this.validQuestionRef = true;
        }
    }

    public validateReponsesRef(){
        if (this.reponsesElement.ref == null) {
            this.errorMessages.push('Ref de la reponse est  invalide');
            this.validReponsesRef = false;
        } else {
            this.validReponsesRef = true;
        }
    }
    public validateReponsesLib(){
        if (this.reponsesElement.lib == null) {
            this.errorMessages.push('Lib de la reponse est  invalide');
            this.validReponsesLib = false;
        } else {
            this.validReponsesLib = true;
        }
    }

    public async openCreateQuiz(quiz: string) {
    const isPermistted = await this.roleService.isPermitted('Quiz', 'add');
    if(isPermistted) {
         this.quiz = new QuizDto();
         this.createQuizDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get quiz(): QuizDto {
        return this.quizService.item;
    }
    set quiz(value: QuizDto) {
        this.quizService.item = value;
    }
    get quizs(): Array<QuizDto> {
        return this.quizService.items;
    }
    set quizs(value: Array<QuizDto>) {
        this.quizService.items = value;
    }
    get createQuizDialog(): boolean {
       return this.quizService.createDialog;
    }
    set createQuizDialog(value: boolean) {
        this.quizService.createDialog= value;
    }
    get typeDeQuestion(): TypeDeQuestionDto {
        return this.typeDeQuestionService.item;
    }
    set typeDeQuestion(value: TypeDeQuestionDto) {
        this.typeDeQuestionService.item = value;
    }
    get typeDeQuestions(): Array<TypeDeQuestionDto> {
        return this.typeDeQuestionService.items;
    }
    set typeDeQuestions(value: Array<TypeDeQuestionDto>) {
        this.typeDeQuestionService.items = value;
    }
    get createTypeDeQuestionDialog(): boolean {
       return this.typeDeQuestionService.createDialog;
    }
    set createTypeDeQuestionDialog(value: boolean) {
        this.typeDeQuestionService.createDialog= value;
    }
    get homeWork(): HomeWorkDto {
        return this.homeWorkService.item;
    }
    set homeWork(value: HomeWorkDto) {
        this.homeWorkService.item = value;
    }
    get homeWorks(): Array<HomeWorkDto> {
        return this.homeWorkService.items;
    }
    set homeWorks(value: Array<HomeWorkDto>) {
        this.homeWorkService.items = value;
    }
    get createHomeWorkDialog(): boolean {
       return this.homeWorkService.createDialog;
    }
    set createHomeWorkDialog(value: boolean) {
        this.homeWorkService.createDialog= value;
    }



    get validQuestionRef(): boolean {
        return this._validQuestionRef;
    }

    set validQuestionRef(value: boolean) {
         this._validQuestionRef = value;
    }

    get validTypeDeQuestionRef(): boolean {
        return this._validTypeDeQuestionRef;
    }
    set validTypeDeQuestionRef(value: boolean) {
        this._validTypeDeQuestionRef = value;
    }
    get validTypeDeQuestionLib(): boolean {
        return this._validTypeDeQuestionLib;
    }
    set validTypeDeQuestionLib(value: boolean) {
        this._validTypeDeQuestionLib = value;
    }
    get validReponsesRef(): boolean {
        return this._validReponsesRef;
    }
    set validReponsesRef(value: boolean) {
        this._validReponsesRef = value;
    }
    get validReponsesLib(): boolean {
        return this._validReponsesLib;
    }
    set validReponsesLib(value: boolean) {
        this._validReponsesLib = value;
    }
    get validQuizRef(): boolean {
        return this._validQuizRef;
    }
    set validQuizRef(value: boolean) {
        this._validQuizRef = value;
    }
    get validQuizLib(): boolean {
        return this._validQuizLib;
    }
    set validQuizLib(value: boolean) {
        this._validQuizLib = value;
    }
    get validHomeWorkLibelle(): boolean {
        return this._validHomeWorkLibelle;
    }
    set validHomeWorkLibelle(value: boolean) {
        this._validHomeWorkLibelle = value;
    }

    get reponsesElement(): ReponseDto {
        if( this._reponsesElement == null )
            this._reponsesElement = new ReponseDto();
        return this._reponsesElement;
    }

    set reponsesElement(value: ReponseDto) {
        this._reponsesElement = value;
    }



}
