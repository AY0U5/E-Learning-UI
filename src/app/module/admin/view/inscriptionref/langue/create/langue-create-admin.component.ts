import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {LangueAdminService} from 'src/app/shared/service/admin/inscriptionref/LangueAdmin.service';
import {LangueDto} from 'src/app/shared/model/inscriptionref/Langue.model';
import {LangueCriteria} from 'src/app/shared/criteria/inscriptionref/LangueCriteria.model';
@Component({
  selector: 'app-langue-create-admin',
  templateUrl: './langue-create-admin.component.html'
})
export class LangueCreateAdminComponent extends AbstractCreateController<LangueDto, LangueCriteria, LangueAdminService>  implements OnInit {



   private _validLangueRef = true;

    constructor( private langueService: LangueAdminService ) {
        super(langueService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validLangueRef = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateLangueRef();
    }

    public validateLangueRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validLangueRef = false;
        } else {
            this.validLangueRef = true;
        }
    }






    get validLangueRef(): boolean {
        return this._validLangueRef;
    }

    set validLangueRef(value: boolean) {
         this._validLangueRef = value;
    }



}
