import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {EtatParcoursAdminService} from 'src/app/shared/service/admin/courseref/EtatParcoursAdmin.service';
import {EtatParcoursDto} from 'src/app/shared/model/courseref/EtatParcours.model';
import {EtatParcoursCriteria} from 'src/app/shared/criteria/courseref/EtatParcoursCriteria.model';



@Component({
    selector: 'app-etat-parcours-edit-admin',
    templateUrl: './etat-parcours-edit-admin.component.html'
})
export class EtatParcoursEditAdminComponent extends AbstractEditController<EtatParcoursDto, EtatParcoursCriteria, EtatParcoursAdminService>   implements OnInit {


    private _validEtatParcoursCode = true;
    private _validEtatParcoursLibelle = true;




    constructor( private etatParcoursService: EtatParcoursAdminService ) {
        super(etatParcoursService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validEtatParcoursCode = value;
        this.validEtatParcoursLibelle = value;
    }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatParcoursCode();
        this.validateEtatParcoursLibelle();
    }
    public validateEtatParcoursCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validEtatParcoursCode = false;
        } else {
            this.validEtatParcoursCode = true;
        }
    }
    public validateEtatParcoursLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEtatParcoursLibelle = false;
        } else {
            this.validEtatParcoursLibelle = true;
        }
    }






    get validEtatParcoursCode(): boolean {
        return this._validEtatParcoursCode;
    }
    set validEtatParcoursCode(value: boolean) {
        this._validEtatParcoursCode = value;
    }
    get validEtatParcoursLibelle(): boolean {
        return this._validEtatParcoursLibelle;
    }
    set validEtatParcoursLibelle(value: boolean) {
        this._validEtatParcoursLibelle = value;
    }

}
