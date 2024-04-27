import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {GroupeTypeAdminService} from 'src/app/shared/service/admin/grpe/GroupeTypeAdmin.service';
import {GroupeTypeDto} from 'src/app/shared/model/grpe/GroupeType.model';
import {GroupeTypeCriteria} from 'src/app/shared/criteria/grpe/GroupeTypeCriteria.model';



@Component({
  selector: 'app-groupe-type-edit-admin',
  templateUrl: './groupe-type-edit-admin.component.html'
})
export class GroupeTypeEditAdminComponent extends AbstractEditController<GroupeTypeDto, GroupeTypeCriteria, GroupeTypeAdminService>   implements OnInit {


    private _validGroupeTypeCode = true;
    private _validGroupeTypeLibelle = true;




    constructor( private groupeTypeService: GroupeTypeAdminService ) {
        super(groupeTypeService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validGroupeTypeCode = value;
        this.validGroupeTypeLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateGroupeTypeCode();
        this.validateGroupeTypeLibelle();
    }
    public validateGroupeTypeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validGroupeTypeCode = false;
        } else {
            this.validGroupeTypeCode = true;
        }
    }
    public validateGroupeTypeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validGroupeTypeLibelle = false;
        } else {
            this.validGroupeTypeLibelle = true;
        }
    }






    get validGroupeTypeCode(): boolean {
        return this._validGroupeTypeCode;
    }
    set validGroupeTypeCode(value: boolean) {
        this._validGroupeTypeCode = value;
    }
    get validGroupeTypeLibelle(): boolean {
        return this._validGroupeTypeLibelle;
    }
    set validGroupeTypeLibelle(value: boolean) {
        this._validGroupeTypeLibelle = value;
    }

}
