import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {EtatCoursAdminService} from 'src/app/shared/service/admin/courseref/EtatCoursAdmin.service';
import {EtatCoursDto} from 'src/app/shared/model/courseref/EtatCours.model';
import {EtatCoursCriteria} from 'src/app/shared/criteria/courseref/EtatCoursCriteria.model';



@Component({
  selector: 'app-etat-cours-edit-admin',
  templateUrl: './etat-cours-edit-admin.component.html'
})
export class EtatCoursEditAdminComponent extends AbstractEditController<EtatCoursDto, EtatCoursCriteria, EtatCoursAdminService>   implements OnInit {


    private _validEtatCoursCode = true;
    private _validEtatCoursLibelle = true;




    constructor( private etatCoursService: EtatCoursAdminService ) {
        super(etatCoursService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validEtatCoursCode = value;
        this.validEtatCoursLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatCoursCode();
        this.validateEtatCoursLibelle();
    }
    public validateEtatCoursCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validEtatCoursCode = false;
        } else {
            this.validEtatCoursCode = true;
        }
    }
    public validateEtatCoursLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEtatCoursLibelle = false;
        } else {
            this.validEtatCoursLibelle = true;
        }
    }






    get validEtatCoursCode(): boolean {
        return this._validEtatCoursCode;
    }
    set validEtatCoursCode(value: boolean) {
        this._validEtatCoursCode = value;
    }
    get validEtatCoursLibelle(): boolean {
        return this._validEtatCoursLibelle;
    }
    set validEtatCoursLibelle(value: boolean) {
        this._validEtatCoursLibelle = value;
    }

}
