import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EtatInscriptionAdminService} from 'src/app/shared/service/admin/inscriptionref/EtatInscriptionAdmin.service';
import {EtatInscriptionDto} from 'src/app/shared/model/inscriptionref/EtatInscription.model';
import {EtatInscriptionCriteria} from 'src/app/shared/criteria/inscriptionref/EtatInscriptionCriteria.model';
@Component({
  selector: 'app-etat-inscription-create-admin',
  templateUrl: './etat-inscription-create-admin.component.html'
})
export class EtatInscriptionCreateAdminComponent extends AbstractCreateController<EtatInscriptionDto, EtatInscriptionCriteria, EtatInscriptionAdminService>  implements OnInit {



   private _validEtatInscriptionRef = true;

    constructor( private etatInscriptionService: EtatInscriptionAdminService ) {
        super(etatInscriptionService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validEtatInscriptionRef = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatInscriptionRef();
    }

    public validateEtatInscriptionRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validEtatInscriptionRef = false;
        } else {
            this.validEtatInscriptionRef = true;
        }
    }






    get validEtatInscriptionRef(): boolean {
        return this._validEtatInscriptionRef;
    }

    set validEtatInscriptionRef(value: boolean) {
         this._validEtatInscriptionRef = value;
    }



}
