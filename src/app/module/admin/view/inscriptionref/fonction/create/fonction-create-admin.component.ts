import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FonctionAdminService} from 'src/app/shared/service/admin/inscriptionref/FonctionAdmin.service';
import {FonctionDto} from 'src/app/shared/model/inscriptionref/Fonction.model';
import {FonctionCriteria} from 'src/app/shared/criteria/inscriptionref/FonctionCriteria.model';
@Component({
  selector: 'app-fonction-create-admin',
  templateUrl: './fonction-create-admin.component.html'
})
export class FonctionCreateAdminComponent extends AbstractCreateController<FonctionDto, FonctionCriteria, FonctionAdminService>  implements OnInit {



   private _validFonctionCode = true;
   private _validFonctionLibelle = true;

    constructor( private fonctionService: FonctionAdminService ) {
        super(fonctionService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validFonctionCode = value;
        this.validFonctionLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFonctionCode();
        this.validateFonctionLibelle();
    }

    public validateFonctionCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validFonctionCode = false;
        } else {
            this.validFonctionCode = true;
        }
    }
    public validateFonctionLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validFonctionLibelle = false;
        } else {
            this.validFonctionLibelle = true;
        }
    }






    get validFonctionCode(): boolean {
        return this._validFonctionCode;
    }

    set validFonctionCode(value: boolean) {
         this._validFonctionCode = value;
    }
    get validFonctionLibelle(): boolean {
        return this._validFonctionLibelle;
    }

    set validFonctionLibelle(value: boolean) {
         this._validFonctionLibelle = value;
    }



}
