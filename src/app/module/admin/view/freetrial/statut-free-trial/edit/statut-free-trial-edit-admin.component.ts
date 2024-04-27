import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {StatutFreeTrialAdminService} from 'src/app/shared/service/admin/freetrial/StatutFreeTrialAdmin.service';
import {StatutFreeTrialDto} from 'src/app/shared/model/freetrial/StatutFreeTrial.model';
import {StatutFreeTrialCriteria} from 'src/app/shared/criteria/freetrial/StatutFreeTrialCriteria.model';



@Component({
  selector: 'app-statut-free-trial-edit-admin',
  templateUrl: './statut-free-trial-edit-admin.component.html'
})
export class StatutFreeTrialEditAdminComponent extends AbstractEditController<StatutFreeTrialDto, StatutFreeTrialCriteria, StatutFreeTrialAdminService>   implements OnInit {


    private _validStatutFreeTrialLibelle = true;
    private _validStatutFreeTrialCode = true;




    constructor( private statutFreeTrialService: StatutFreeTrialAdminService ) {
        super(statutFreeTrialService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validStatutFreeTrialLibelle = value;
        this.validStatutFreeTrialCode = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateStatutFreeTrialLibelle();
        this.validateStatutFreeTrialCode();
    }
    public validateStatutFreeTrialLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validStatutFreeTrialLibelle = false;
        } else {
            this.validStatutFreeTrialLibelle = true;
        }
    }
    public validateStatutFreeTrialCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validStatutFreeTrialCode = false;
        } else {
            this.validStatutFreeTrialCode = true;
        }
    }






    get validStatutFreeTrialLibelle(): boolean {
        return this._validStatutFreeTrialLibelle;
    }
    set validStatutFreeTrialLibelle(value: boolean) {
        this._validStatutFreeTrialLibelle = value;
    }
    get validStatutFreeTrialCode(): boolean {
        return this._validStatutFreeTrialCode;
    }
    set validStatutFreeTrialCode(value: boolean) {
        this._validStatutFreeTrialCode = value;
    }

}
