import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {HoweWorkQSTReponseAdminService} from 'src/app/shared/service/admin/homework/HoweWorkQSTReponseAdmin.service';
import {HoweWorkQSTReponseDto} from 'src/app/shared/model/homework/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseCriteria} from 'src/app/shared/criteria/homework/HoweWorkQSTReponseCriteria.model';


import {HomeWorkQuestionDto} from 'src/app/shared/model/homework/HomeWorkQuestion.model';
import {HomeWorkQuestionAdminService} from 'src/app/shared/service/admin/homework/HomeWorkQuestionAdmin.service';

@Component({
  selector: 'app-howe-work-q-s-t-reponse-edit-admin',
  templateUrl: './howe-work-q-s-t-reponse-edit-admin.component.html'
})
export class HoweWorkQSTReponseEditAdminComponent extends AbstractEditController<HoweWorkQSTReponseDto, HoweWorkQSTReponseCriteria, HoweWorkQSTReponseAdminService>   implements OnInit {


    private _validHoweWorkQSTReponseRef = true;
    private _validHoweWorkQSTReponseLib = true;

    private _validHomeWorkQuestionRef = true;
    private _validHomeWorkQuestionLibelle = true;



    constructor( private howeWorkQSTReponseService: HoweWorkQSTReponseAdminService , private homeWorkQuestionService: HomeWorkQuestionAdminService) {
        super(howeWorkQSTReponseService);
    }

    ngOnInit(): void {
        this.homeWorkQuestion = new HomeWorkQuestionDto();
        this.homeWorkQuestionService.findAll().subscribe((data) => this.homeWorkQuestions = data);
    }


    public override setValidation(value: boolean){
        this.validHoweWorkQSTReponseRef = value;
        this.validHoweWorkQSTReponseLib = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateHoweWorkQSTReponseRef();
        this.validateHoweWorkQSTReponseLib();
    }
    public validateHoweWorkQSTReponseRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validHoweWorkQSTReponseRef = false;
        } else {
            this.validHoweWorkQSTReponseRef = true;
        }
    }
    public validateHoweWorkQSTReponseLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
            this.errorMessages.push('Lib non valide');
            this.validHoweWorkQSTReponseLib = false;
        } else {
            this.validHoweWorkQSTReponseLib = true;
        }
    }



   public async openCreateHomeWorkQuestion(homeWorkQuestion: string) {
        const isPermistted = await this.roleService.isPermitted('HomeWorkQuestion', 'edit');
        if (isPermistted) {
             this.homeWorkQuestion = new HomeWorkQuestionDto();
             this.createHomeWorkQuestionDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get homeWorkQuestion(): HomeWorkQuestionDto {
       return this.homeWorkQuestionService.item;
   }
  set homeWorkQuestion(value: HomeWorkQuestionDto) {
        this.homeWorkQuestionService.item = value;
   }
   get homeWorkQuestions(): Array<HomeWorkQuestionDto> {
        return this.homeWorkQuestionService.items;
   }
   set homeWorkQuestions(value: Array<HomeWorkQuestionDto>) {
        this.homeWorkQuestionService.items = value;
   }
   get createHomeWorkQuestionDialog(): boolean {
       return this.homeWorkQuestionService.createDialog;
   }
  set createHomeWorkQuestionDialog(value: boolean) {
       this.homeWorkQuestionService.createDialog= value;
   }


    get validHoweWorkQSTReponseRef(): boolean {
        return this._validHoweWorkQSTReponseRef;
    }
    set validHoweWorkQSTReponseRef(value: boolean) {
        this._validHoweWorkQSTReponseRef = value;
    }
    get validHoweWorkQSTReponseLib(): boolean {
        return this._validHoweWorkQSTReponseLib;
    }
    set validHoweWorkQSTReponseLib(value: boolean) {
        this._validHoweWorkQSTReponseLib = value;
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
}
