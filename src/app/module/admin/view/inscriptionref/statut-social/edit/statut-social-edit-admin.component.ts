import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {StatutSocialAdminService} from 'src/app/shared/service/admin/inscriptionref/StatutSocialAdmin.service';
import {StatutSocialDto} from 'src/app/shared/model/inscriptionref/StatutSocial.model';
import {StatutSocialCriteria} from 'src/app/shared/criteria/inscriptionref/StatutSocialCriteria.model';



@Component({
  selector: 'app-statut-social-edit-admin',
  templateUrl: './statut-social-edit-admin.component.html'
})
export class StatutSocialEditAdminComponent extends AbstractEditController<StatutSocialDto, StatutSocialCriteria, StatutSocialAdminService>   implements OnInit {


    private _validStatutSocialCode = true;
    private _validStatutSocialLibelle = true;




    constructor( private statutSocialService: StatutSocialAdminService ) {
        super(statutSocialService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validStatutSocialCode = value;
        this.validStatutSocialLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateStatutSocialCode();
        this.validateStatutSocialLibelle();
    }
    public validateStatutSocialCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validStatutSocialCode = false;
        } else {
            this.validStatutSocialCode = true;
        }
    }
    public validateStatutSocialLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validStatutSocialLibelle = false;
        } else {
            this.validStatutSocialLibelle = true;
        }
    }






    get validStatutSocialCode(): boolean {
        return this._validStatutSocialCode;
    }
    set validStatutSocialCode(value: boolean) {
        this._validStatutSocialCode = value;
    }
    get validStatutSocialLibelle(): boolean {
        return this._validStatutSocialLibelle;
    }
    set validStatutSocialLibelle(value: boolean) {
        this._validStatutSocialLibelle = value;
    }

}
