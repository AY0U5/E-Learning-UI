import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {StatutFreeTrialAdminService} from 'src/app/shared/service/admin/freetrial/StatutFreeTrialAdmin.service';
import {StatutFreeTrialDto} from 'src/app/shared/model/freetrial/StatutFreeTrial.model';
import {StatutFreeTrialCriteria} from 'src/app/shared/criteria/freetrial/StatutFreeTrialCriteria.model';
@Component({
  selector: 'app-statut-free-trial-create-admin',
  templateUrl: './statut-free-trial-create-admin.component.html'
})
export class StatutFreeTrialCreateAdminComponent extends AbstractCreateController<StatutFreeTrialDto, StatutFreeTrialCriteria, StatutFreeTrialAdminService>  implements OnInit {



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
