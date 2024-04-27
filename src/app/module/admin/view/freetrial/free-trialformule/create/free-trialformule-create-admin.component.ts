import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FreeTrialformuleAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialformuleAdmin.service';
import {FreeTrialformuleDto} from 'src/app/shared/model/freetrial/FreeTrialformule.model';
import {FreeTrialformuleCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialformuleCriteria.model';
import {InscriptionDto} from 'src/app/shared/model/grpe/Inscription.model';
import {InscriptionAdminService} from 'src/app/shared/service/admin/grpe/InscriptionAdmin.service';
@Component({
  selector: 'app-free-trialformule-create-admin',
  templateUrl: './free-trialformule-create-admin.component.html'
})
export class FreeTrialformuleCreateAdminComponent extends AbstractCreateController<FreeTrialformuleDto, FreeTrialformuleCriteria, FreeTrialformuleAdminService>  implements OnInit {



   private _validFreeTrialformuleCode = true;
    private _validInscriptionNumeroInscription = true;
    private _validInscriptionEtudiant = true;
    private _validInscriptionEtatInscription = true;
    private _validInscriptionParcours = true;
    private _validInscriptionGroupeEtude = true;
    private _validInscriptionGroupeType = true;
    private _validInscriptionStatutSocial = true;
    private _validInscriptionInteretEtudiant = true;
    private _validInscriptionNiveauEtude = true;
    private _validInscriptionFonction = true;
    private _validInscriptionQuiz = true;

    constructor( private freeTrialformuleService: FreeTrialformuleAdminService , private inscriptionService: InscriptionAdminService) {
        super(freeTrialformuleService);
    }

    ngOnInit(): void {
        this.inscription = new InscriptionDto();
        this.inscriptionService.findAll().subscribe((data) => this.inscriptions = data);
    }





    public override setValidation(value: boolean){
        this.validFreeTrialformuleCode = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFreeTrialformuleCode();
    }

    public validateFreeTrialformuleCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validFreeTrialformuleCode = false;
        } else {
            this.validFreeTrialformuleCode = true;
        }
    }



    get inscription(): InscriptionDto {
        return this.inscriptionService.item;
    }
    set inscription(value: InscriptionDto) {
        this.inscriptionService.item = value;
    }
    get inscriptions(): Array<InscriptionDto> {
        return this.inscriptionService.items;
    }
    set inscriptions(value: Array<InscriptionDto>) {
        this.inscriptionService.items = value;
    }
    get createInscriptionDialog(): boolean {
       return this.inscriptionService.createDialog;
    }
    set createInscriptionDialog(value: boolean) {
        this.inscriptionService.createDialog= value;
    }



    get validFreeTrialformuleCode(): boolean {
        return this._validFreeTrialformuleCode;
    }

    set validFreeTrialformuleCode(value: boolean) {
         this._validFreeTrialformuleCode = value;
    }

    get validInscriptionNumeroInscription(): boolean {
        return this._validInscriptionNumeroInscription;
    }
    set validInscriptionNumeroInscription(value: boolean) {
        this._validInscriptionNumeroInscription = value;
    }
    get validInscriptionEtudiant(): boolean {
        return this._validInscriptionEtudiant;
    }
    set validInscriptionEtudiant(value: boolean) {
        this._validInscriptionEtudiant = value;
    }
    get validInscriptionEtatInscription(): boolean {
        return this._validInscriptionEtatInscription;
    }
    set validInscriptionEtatInscription(value: boolean) {
        this._validInscriptionEtatInscription = value;
    }
    get validInscriptionParcours(): boolean {
        return this._validInscriptionParcours;
    }
    set validInscriptionParcours(value: boolean) {
        this._validInscriptionParcours = value;
    }
    get validInscriptionGroupeEtude(): boolean {
        return this._validInscriptionGroupeEtude;
    }
    set validInscriptionGroupeEtude(value: boolean) {
        this._validInscriptionGroupeEtude = value;
    }
    get validInscriptionGroupeType(): boolean {
        return this._validInscriptionGroupeType;
    }
    set validInscriptionGroupeType(value: boolean) {
        this._validInscriptionGroupeType = value;
    }
    get validInscriptionStatutSocial(): boolean {
        return this._validInscriptionStatutSocial;
    }
    set validInscriptionStatutSocial(value: boolean) {
        this._validInscriptionStatutSocial = value;
    }
    get validInscriptionInteretEtudiant(): boolean {
        return this._validInscriptionInteretEtudiant;
    }
    set validInscriptionInteretEtudiant(value: boolean) {
        this._validInscriptionInteretEtudiant = value;
    }
    get validInscriptionNiveauEtude(): boolean {
        return this._validInscriptionNiveauEtude;
    }
    set validInscriptionNiveauEtude(value: boolean) {
        this._validInscriptionNiveauEtude = value;
    }
    get validInscriptionFonction(): boolean {
        return this._validInscriptionFonction;
    }
    set validInscriptionFonction(value: boolean) {
        this._validInscriptionFonction = value;
    }
    get validInscriptionQuiz(): boolean {
        return this._validInscriptionQuiz;
    }
    set validInscriptionQuiz(value: boolean) {
        this._validInscriptionQuiz = value;
    }


}
