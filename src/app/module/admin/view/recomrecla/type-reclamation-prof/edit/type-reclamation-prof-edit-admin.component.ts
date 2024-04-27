import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TypeReclamationProfAdminService} from 'src/app/shared/service/admin/recomrecla/TypeReclamationProfAdmin.service';
import {TypeReclamationProfDto} from 'src/app/shared/model/recomrecla/TypeReclamationProf.model';
import {TypeReclamationProfCriteria} from 'src/app/shared/criteria/recomrecla/TypeReclamationProfCriteria.model';



@Component({
  selector: 'app-type-reclamation-prof-edit-admin',
  templateUrl: './type-reclamation-prof-edit-admin.component.html'
})
export class TypeReclamationProfEditAdminComponent extends AbstractEditController<TypeReclamationProfDto, TypeReclamationProfCriteria, TypeReclamationProfAdminService>   implements OnInit {


    private _validTypeReclamationProfCode = true;
    private _validTypeReclamationProfLibelle = true;




    constructor( private typeReclamationProfService: TypeReclamationProfAdminService ) {
        super(typeReclamationProfService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validTypeReclamationProfCode = value;
        this.validTypeReclamationProfLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeReclamationProfCode();
        this.validateTypeReclamationProfLibelle();
    }
    public validateTypeReclamationProfCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validTypeReclamationProfCode = false;
        } else {
            this.validTypeReclamationProfCode = true;
        }
    }
    public validateTypeReclamationProfLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTypeReclamationProfLibelle = false;
        } else {
            this.validTypeReclamationProfLibelle = true;
        }
    }






    get validTypeReclamationProfCode(): boolean {
        return this._validTypeReclamationProfCode;
    }
    set validTypeReclamationProfCode(value: boolean) {
        this._validTypeReclamationProfCode = value;
    }
    get validTypeReclamationProfLibelle(): boolean {
        return this._validTypeReclamationProfLibelle;
    }
    set validTypeReclamationProfLibelle(value: boolean) {
        this._validTypeReclamationProfLibelle = value;
    }

}
