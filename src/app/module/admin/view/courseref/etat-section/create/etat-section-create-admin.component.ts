import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EtatSectionAdminService} from 'src/app/shared/service/admin/courseref/EtatSectionAdmin.service';
import {EtatSectionDto} from 'src/app/shared/model/courseref/EtatSection.model';
import {EtatSectionCriteria} from 'src/app/shared/criteria/courseref/EtatSectionCriteria.model';
@Component({
    selector: 'app-etat-section-create-admin',
    templateUrl: './etat-section-create-admin.component.html'
})
export class EtatSectionCreateAdminComponent extends AbstractCreateController<EtatSectionDto, EtatSectionCriteria, EtatSectionAdminService>  implements OnInit {



    private _validEtatSectionCode = true;
    private _validEtatSectionLibelle = true;

    constructor( private etatSectionService: EtatSectionAdminService ) {
        super(etatSectionService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validEtatSectionCode = value;
        this.validEtatSectionLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatSectionCode();
        this.validateEtatSectionLibelle();
    }

    public validateEtatSectionCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validEtatSectionCode = false;
        } else {
            this.validEtatSectionCode = true;
        }
    }
    public validateEtatSectionLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEtatSectionLibelle = false;
        } else {
            this.validEtatSectionLibelle = true;
        }
    }






    get validEtatSectionCode(): boolean {
        return this._validEtatSectionCode;
    }

    set validEtatSectionCode(value: boolean) {
        this._validEtatSectionCode = value;
    }
    get validEtatSectionLibelle(): boolean {
        return this._validEtatSectionLibelle;
    }

    set validEtatSectionLibelle(value: boolean) {
        this._validEtatSectionLibelle = value;
    }



}
