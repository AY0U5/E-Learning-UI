import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {GroupeEtatAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtatAdmin.service';
import {GroupeEtatDto} from 'src/app/shared/model/grpe/GroupeEtat.model';
import {GroupeEtatCriteria} from 'src/app/shared/criteria/grpe/GroupeEtatCriteria.model';
@Component({
  selector: 'app-groupe-etat-create-admin',
  templateUrl: './groupe-etat-create-admin.component.html'
})
export class GroupeEtatCreateAdminComponent extends AbstractCreateController<GroupeEtatDto, GroupeEtatCriteria, GroupeEtatAdminService>  implements OnInit {



   private _validGroupeEtatCode = true;
   private _validGroupeEtatLibelle = true;

    constructor( private groupeEtatService: GroupeEtatAdminService ) {
        super(groupeEtatService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validGroupeEtatCode = value;
        this.validGroupeEtatLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateGroupeEtatCode();
        this.validateGroupeEtatLibelle();
    }

    public validateGroupeEtatCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validGroupeEtatCode = false;
        } else {
            this.validGroupeEtatCode = true;
        }
    }
    public validateGroupeEtatLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validGroupeEtatLibelle = false;
        } else {
            this.validGroupeEtatLibelle = true;
        }
    }






    get validGroupeEtatCode(): boolean {
        return this._validGroupeEtatCode;
    }

    set validGroupeEtatCode(value: boolean) {
         this._validGroupeEtatCode = value;
    }
    get validGroupeEtatLibelle(): boolean {
        return this._validGroupeEtatLibelle;
    }

    set validGroupeEtatLibelle(value: boolean) {
         this._validGroupeEtatLibelle = value;
    }



}
