import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {LangueAdminService} from 'src/app/shared/service/admin/inscriptionref/LangueAdmin.service';
import {LangueDto} from 'src/app/shared/model/inscriptionref/Langue.model';
import {LangueCriteria} from 'src/app/shared/criteria/inscriptionref/LangueCriteria.model';



@Component({
  selector: 'app-langue-edit-admin',
  templateUrl: './langue-edit-admin.component.html'
})
export class LangueEditAdminComponent extends AbstractEditController<LangueDto, LangueCriteria, LangueAdminService>   implements OnInit {


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
