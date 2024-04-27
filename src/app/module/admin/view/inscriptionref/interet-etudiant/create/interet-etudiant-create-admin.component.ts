import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {InteretEtudiantAdminService} from 'src/app/shared/service/admin/inscriptionref/InteretEtudiantAdmin.service';
import {InteretEtudiantDto} from 'src/app/shared/model/inscriptionref/InteretEtudiant.model';
import {InteretEtudiantCriteria} from 'src/app/shared/criteria/inscriptionref/InteretEtudiantCriteria.model';
@Component({
  selector: 'app-interet-etudiant-create-admin',
  templateUrl: './interet-etudiant-create-admin.component.html'
})
export class InteretEtudiantCreateAdminComponent extends AbstractCreateController<InteretEtudiantDto, InteretEtudiantCriteria, InteretEtudiantAdminService>  implements OnInit {



   private _validInteretEtudiantCode = true;
   private _validInteretEtudiantLibelle = true;

    constructor( private interetEtudiantService: InteretEtudiantAdminService ) {
        super(interetEtudiantService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validInteretEtudiantCode = value;
        this.validInteretEtudiantLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateInteretEtudiantCode();
        this.validateInteretEtudiantLibelle();
    }

    public validateInteretEtudiantCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validInteretEtudiantCode = false;
        } else {
            this.validInteretEtudiantCode = true;
        }
    }
    public validateInteretEtudiantLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validInteretEtudiantLibelle = false;
        } else {
            this.validInteretEtudiantLibelle = true;
        }
    }






    get validInteretEtudiantCode(): boolean {
        return this._validInteretEtudiantCode;
    }

    set validInteretEtudiantCode(value: boolean) {
         this._validInteretEtudiantCode = value;
    }
    get validInteretEtudiantLibelle(): boolean {
        return this._validInteretEtudiantLibelle;
    }

    set validInteretEtudiantLibelle(value: boolean) {
         this._validInteretEtudiantLibelle = value;
    }



}
