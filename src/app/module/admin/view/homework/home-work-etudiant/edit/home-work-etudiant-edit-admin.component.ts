import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {HomeWorkEtudiantAdminService} from 'src/app/shared/service/admin/homework/HomeWorkEtudiantAdmin.service';
import {HomeWorkEtudiantDto} from 'src/app/shared/model/homework/HomeWorkEtudiant.model';
import {HomeWorkEtudiantCriteria} from 'src/app/shared/criteria/homework/HomeWorkEtudiantCriteria.model';


import {HoweWorkQSTReponseDto} from 'src/app/shared/model/homework/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseAdminService} from 'src/app/shared/service/admin/homework/HoweWorkQSTReponseAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {ReponseEtudiantHomeWorkDto} from 'src/app/shared/model/homework/ReponseEtudiantHomeWork.model';
import {ReponseEtudiantHomeWorkAdminService} from 'src/app/shared/service/admin/homework/ReponseEtudiantHomeWorkAdmin.service';
import {HomeWorkQuestionDto} from 'src/app/shared/model/homework/HomeWorkQuestion.model';
import {HomeWorkQuestionAdminService} from 'src/app/shared/service/admin/homework/HomeWorkQuestionAdmin.service';
import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkAdminService} from 'src/app/shared/service/admin/homework/HomeWorkAdmin.service';

@Component({
  selector: 'app-home-work-etudiant-edit-admin',
  templateUrl: './home-work-etudiant-edit-admin.component.html'
})
export class HomeWorkEtudiantEditAdminComponent extends AbstractEditController<HomeWorkEtudiantDto, HomeWorkEtudiantCriteria, HomeWorkEtudiantAdminService>   implements OnInit {

    private _reponseEtudiantHomeWorksElement = new ReponseEtudiantHomeWorkDto();


    private _validEtudiantRef = true;
    private _validHomeWorkLibelle = true;



    constructor( private homeWorkEtudiantService: HomeWorkEtudiantAdminService , private howeWorkQSTReponseService: HoweWorkQSTReponseAdminService, private etudiantService: EtudiantAdminService, private reponseEtudiantHomeWorkService: ReponseEtudiantHomeWorkAdminService, private homeWorkQuestionService: HomeWorkQuestionAdminService, private homeWorkService: HomeWorkAdminService) {
        super(homeWorkEtudiantService);
    }

    ngOnInit(): void {
        this.reponseEtudiantHomeWorksElement.howeWorkQSTReponse = new HoweWorkQSTReponseDto();
        this.howeWorkQSTReponseService.findAll().subscribe((data) => this.howeWorkQSTReponses = data);
        this.reponseEtudiantHomeWorksElement.homeWorkQuestion = new HomeWorkQuestionDto();
        this.homeWorkQuestionService.findAll().subscribe((data) => this.homeWorkQuestions = data);

        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.homeWork = new HomeWorkDto();
        this.homeWorkService.findAll().subscribe((data) => this.homeWorks = data);
    }
    public override prepareEdit() {
        this.item.dateHomeWork = this.homeWorkEtudiantService.format(this.item.dateHomeWork);
    }



    public validateReponseEtudiantHomeWorks(){
        this.errorMessages = new Array();
    }
    public override setValidation(value: boolean){
        }
   public addReponseEtudiantHomeWorks() {
        if( this.item.reponseEtudiantHomeWorks == null )
            this.item.reponseEtudiantHomeWorks = new Array<ReponseEtudiantHomeWorkDto>();
       this.validateReponseEtudiantHomeWorks();
       if (this.errorMessages.length === 0) {
            if(this.reponseEtudiantHomeWorksElement.id == null){
                this.item.reponseEtudiantHomeWorks.push(this.reponseEtudiantHomeWorksElement);
            }else{
                const index = this.item.reponseEtudiantHomeWorks.findIndex(e => e.id == this.reponseEtudiantHomeWorksElement.id);
                this.item.reponseEtudiantHomeWorks[index] = this.reponseEtudiantHomeWorksElement;
            }
          this.reponseEtudiantHomeWorksElement = new ReponseEtudiantHomeWorkDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteReponseEtudiantHomeWorks(p: ReponseEtudiantHomeWorkDto) {
        this.item.reponseEtudiantHomeWorks.forEach((element, index) => {
            if (element === p) { this.item.reponseEtudiantHomeWorks.splice(index, 1); }
        });
    }

    public editReponseEtudiantHomeWorks(p: ReponseEtudiantHomeWorkDto) {
        this.reponseEtudiantHomeWorksElement = {... p};
        this.activeTab = 0;
    }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateHoweWorkQSTReponse(howeWorkQSTReponse: string) {
        const isPermistted = await this.roleService.isPermitted('HoweWorkQSTReponse', 'edit');
        if (isPermistted) {
             this.howeWorkQSTReponse = new HoweWorkQSTReponseDto();
             this.createHoweWorkQSTReponseDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
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
   public async openCreateHomeWork(homeWork: string) {
        const isPermistted = await this.roleService.isPermitted('HomeWork', 'edit');
        if (isPermistted) {
             this.homeWork = new HomeWorkDto();
             this.createHomeWorkDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get etudiant(): EtudiantDto {
       return this.etudiantService.item;
   }
  set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
   }
   get etudiants(): Array<EtudiantDto> {
        return this.etudiantService.items;
   }
   set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
   }
   get createEtudiantDialog(): boolean {
       return this.etudiantService.createDialog;
   }
  set createEtudiantDialog(value: boolean) {
       this.etudiantService.createDialog= value;
   }
   get howeWorkQSTReponse(): HoweWorkQSTReponseDto {
       return this.howeWorkQSTReponseService.item;
   }
  set howeWorkQSTReponse(value: HoweWorkQSTReponseDto) {
        this.howeWorkQSTReponseService.item = value;
   }
   get howeWorkQSTReponses(): Array<HoweWorkQSTReponseDto> {
        return this.howeWorkQSTReponseService.items;
   }
   set howeWorkQSTReponses(value: Array<HoweWorkQSTReponseDto>) {
        this.howeWorkQSTReponseService.items = value;
   }
   get createHoweWorkQSTReponseDialog(): boolean {
       return this.howeWorkQSTReponseService.createDialog;
   }
  set createHoweWorkQSTReponseDialog(value: boolean) {
       this.howeWorkQSTReponseService.createDialog= value;
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

    get reponseEtudiantHomeWorksElement(): ReponseEtudiantHomeWorkDto {
        if( this._reponseEtudiantHomeWorksElement == null )
            this._reponseEtudiantHomeWorksElement = new ReponseEtudiantHomeWorkDto();
         return this._reponseEtudiantHomeWorksElement;
    }

    set reponseEtudiantHomeWorksElement(value: ReponseEtudiantHomeWorkDto) {
        this._reponseEtudiantHomeWorksElement = value;
    }


    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
    get validHomeWorkLibelle(): boolean {
        return this._validHomeWorkLibelle;
    }
    set validHomeWorkLibelle(value: boolean) {
        this._validHomeWorkLibelle = value;
    }
}
