import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {GroupeEtudeAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudeAdmin.service';
import {GroupeEtudeDto} from 'src/app/shared/model/grpe/GroupeEtude.model';
import {GroupeEtudeCriteria} from 'src/app/shared/criteria/grpe/GroupeEtudeCriteria.model';
@Component({
  selector: 'app-groupe-etude-create-admin',
  templateUrl: './groupe-etude-create-admin.component.html'
})
export class GroupeEtudeCreateAdminComponent extends AbstractCreateController<GroupeEtudeDto, GroupeEtudeCriteria, GroupeEtudeAdminService>  implements OnInit {



   private _validGroupeEtudeLibelle = true;

    constructor( private groupeEtudeService: GroupeEtudeAdminService ) {
        super(groupeEtudeService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validGroupeEtudeLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateGroupeEtudeLibelle();
    }

    public validateGroupeEtudeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validGroupeEtudeLibelle = false;
        } else {
            this.validGroupeEtudeLibelle = true;
        }
    }






    get validGroupeEtudeLibelle(): boolean {
        return this._validGroupeEtudeLibelle;
    }

    set validGroupeEtudeLibelle(value: boolean) {
         this._validGroupeEtudeLibelle = value;
    }



}
