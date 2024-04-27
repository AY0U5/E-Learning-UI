import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TypeReclamationEtudiantAdminService} from 'src/app/shared/service/admin/recomrecla/TypeReclamationEtudiantAdmin.service';
import {TypeReclamationEtudiantDto} from 'src/app/shared/model/recomrecla/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantCriteria} from 'src/app/shared/criteria/recomrecla/TypeReclamationEtudiantCriteria.model';



@Component({
  selector: 'app-type-reclamation-etudiant-edit-admin',
  templateUrl: './type-reclamation-etudiant-edit-admin.component.html'
})
export class TypeReclamationEtudiantEditAdminComponent extends AbstractEditController<TypeReclamationEtudiantDto, TypeReclamationEtudiantCriteria, TypeReclamationEtudiantAdminService>   implements OnInit {


    private _validTypeReclamationEtudiantCode = true;
    private _validTypeReclamationEtudiantLibelle = true;




    constructor( private typeReclamationEtudiantService: TypeReclamationEtudiantAdminService ) {
        super(typeReclamationEtudiantService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validTypeReclamationEtudiantCode = value;
        this.validTypeReclamationEtudiantLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeReclamationEtudiantCode();
        this.validateTypeReclamationEtudiantLibelle();
    }
    public validateTypeReclamationEtudiantCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validTypeReclamationEtudiantCode = false;
        } else {
            this.validTypeReclamationEtudiantCode = true;
        }
    }
    public validateTypeReclamationEtudiantLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTypeReclamationEtudiantLibelle = false;
        } else {
            this.validTypeReclamationEtudiantLibelle = true;
        }
    }






    get validTypeReclamationEtudiantCode(): boolean {
        return this._validTypeReclamationEtudiantCode;
    }
    set validTypeReclamationEtudiantCode(value: boolean) {
        this._validTypeReclamationEtudiantCode = value;
    }
    get validTypeReclamationEtudiantLibelle(): boolean {
        return this._validTypeReclamationEtudiantLibelle;
    }
    set validTypeReclamationEtudiantLibelle(value: boolean) {
        this._validTypeReclamationEtudiantLibelle = value;
    }

}
