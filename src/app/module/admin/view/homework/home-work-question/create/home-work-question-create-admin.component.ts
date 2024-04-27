import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {HomeWorkQuestionAdminService} from 'src/app/shared/service/admin/homework/HomeWorkQuestionAdmin.service';
import {HomeWorkQuestionDto} from 'src/app/shared/model/homework/HomeWorkQuestion.model';
import {HomeWorkQuestionCriteria} from 'src/app/shared/criteria/homework/HomeWorkQuestionCriteria.model';
import {HoweWorkQSTReponseDto} from 'src/app/shared/model/homework/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseAdminService} from 'src/app/shared/service/admin/homework/HoweWorkQSTReponseAdmin.service';
import {TypeDeQuestionDto} from 'src/app/shared/model/quizref/TypeDeQuestion.model';
import {TypeDeQuestionAdminService} from 'src/app/shared/service/admin/quizref/TypeDeQuestionAdmin.service';
import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkAdminService} from 'src/app/shared/service/admin/homework/HomeWorkAdmin.service';
@Component({
  selector: 'app-home-work-question-create-admin',
  templateUrl: './home-work-question-create-admin.component.html'
})
export class HomeWorkQuestionCreateAdminComponent extends AbstractCreateController<HomeWorkQuestionDto, HomeWorkQuestionCriteria, HomeWorkQuestionAdminService>  implements OnInit {

    private _howeWorkQSTReponsesElement = new HoweWorkQSTReponseDto();


   private _validHomeWorkQuestionRef = true;
   private _validHomeWorkQuestionLibelle = true;
    private _validTypeDeQuestionRef = true;
    private _validTypeDeQuestionLib = true;
    private _validHoweWorkQSTReponsesRef = true;
    private _validHoweWorkQSTReponsesLib = true;
    private _validHomeWorkLibelle = true;

    constructor( private homeWorkQuestionService: HomeWorkQuestionAdminService , private howeWorkQSTReponseService: HoweWorkQSTReponseAdminService, private typeDeQuestionService: TypeDeQuestionAdminService, private homeWorkService: HomeWorkAdminService) {
        super(homeWorkQuestionService);
    }

    ngOnInit(): void {
        this.typeDeQuestion = new TypeDeQuestionDto();
        this.typeDeQuestionService.findAll().subscribe((data) => this.typeDeQuestions = data);
        this.homeWork = new HomeWorkDto();
        this.homeWorkService.findAll().subscribe((data) => this.homeWorks = data);
    }



    validateHoweWorkQSTReponses(){
        this.errorMessages = new Array();
        this.validateHoweWorkQSTReponsesRef();
        this.validateHoweWorkQSTReponsesLib();
    }


    public override setValidation(value: boolean){
        this.validHomeWorkQuestionRef = value;
        this.validHomeWorkQuestionLibelle = value;
        this.validHoweWorkQSTReponsesRef = value;
        this.validHoweWorkQSTReponsesLib = value;
    }

    public addHoweWorkQSTReponses() {
        if( this.item.howeWorkQSTReponses == null )
            this.item.howeWorkQSTReponses = new Array<HoweWorkQSTReponseDto>();
       this.validateHoweWorkQSTReponses();
       if (this.errorMessages.length === 0) {
              this.item.howeWorkQSTReponses.push({... this.howeWorkQSTReponsesElement});
              this.howeWorkQSTReponsesElement = new HoweWorkQSTReponseDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletehoweWorkQSTReponses(p: HoweWorkQSTReponseDto) {
        this.item.howeWorkQSTReponses.forEach((element, index) => {
            if (element === p) { this.item.howeWorkQSTReponses.splice(index, 1); }
        });
    }

    public edithoweWorkQSTReponses(p: HoweWorkQSTReponseDto) {
        this.howeWorkQSTReponsesElement = {... p};
        this.activeTab = 0;
    }


    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateHomeWorkQuestionRef();
        this.validateHomeWorkQuestionLibelle();
    }

    public validateHomeWorkQuestionRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validHomeWorkQuestionRef = false;
        } else {
            this.validHomeWorkQuestionRef = true;
        }
    }
    public validateHomeWorkQuestionLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validHomeWorkQuestionLibelle = false;
        } else {
            this.validHomeWorkQuestionLibelle = true;
        }
    }

    public validateHoweWorkQSTReponsesRef(){
        if (this.howeWorkQSTReponsesElement.ref == null) {
            this.errorMessages.push('Ref de la howeWorkQSTReponse est  invalide');
            this.validHoweWorkQSTReponsesRef = false;
        } else {
            this.validHoweWorkQSTReponsesRef = true;
        }
    }
    public validateHoweWorkQSTReponsesLib(){
        if (this.howeWorkQSTReponsesElement.lib == null) {
            this.errorMessages.push('Lib de la howeWorkQSTReponse est  invalide');
            this.validHoweWorkQSTReponsesLib = false;
        } else {
            this.validHoweWorkQSTReponsesLib = true;
        }
    }

    public async openCreateHomeWork(homeWork: string) {
    const isPermistted = await this.roleService.isPermitted('HomeWork', 'add');
    if(isPermistted) {
         this.homeWork = new HomeWorkDto();
         this.createHomeWorkDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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



    get validHomeWorkQuestionRef(): boolean {
        return this._validHomeWorkQuestionRef;
    }

    set validHomeWorkQuestionRef(value: boolean) {
         this._validHomeWorkQuestionRef = value;
    }
    get validHomeWorkQuestionLibelle(): boolean {
        return this._validHomeWorkQuestionLibelle;
    }

    set validHomeWorkQuestionLibelle(value: boolean) {
         this._validHomeWorkQuestionLibelle = value;
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
    get validHoweWorkQSTReponsesRef(): boolean {
        return this._validHoweWorkQSTReponsesRef;
    }
    set validHoweWorkQSTReponsesRef(value: boolean) {
        this._validHoweWorkQSTReponsesRef = value;
    }
    get validHoweWorkQSTReponsesLib(): boolean {
        return this._validHoweWorkQSTReponsesLib;
    }
    set validHoweWorkQSTReponsesLib(value: boolean) {
        this._validHoweWorkQSTReponsesLib = value;
    }
    get validHomeWorkLibelle(): boolean {
        return this._validHomeWorkLibelle;
    }
    set validHomeWorkLibelle(value: boolean) {
        this._validHomeWorkLibelle = value;
    }

    get howeWorkQSTReponsesElement(): HoweWorkQSTReponseDto {
        if( this._howeWorkQSTReponsesElement == null )
            this._howeWorkQSTReponsesElement = new HoweWorkQSTReponseDto();
        return this._howeWorkQSTReponsesElement;
    }

    set howeWorkQSTReponsesElement(value: HoweWorkQSTReponseDto) {
        this._howeWorkQSTReponsesElement = value;
    }

}
