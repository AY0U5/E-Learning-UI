import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FaqTypeAdminService} from 'src/app/shared/service/admin/faq/FaqTypeAdmin.service';
import {FaqTypeDto} from 'src/app/shared/model/faq/FaqType.model';
import {FaqTypeCriteria} from 'src/app/shared/criteria/faq/FaqTypeCriteria.model';



@Component({
  selector: 'app-faq-type-edit-admin',
  templateUrl: './faq-type-edit-admin.component.html'
})
export class FaqTypeEditAdminComponent extends AbstractEditController<FaqTypeDto, FaqTypeCriteria, FaqTypeAdminService>   implements OnInit {


    private _validFaqTypeLibelle = true;




    constructor( private faqTypeService: FaqTypeAdminService ) {
        super(faqTypeService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validFaqTypeLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFaqTypeLibelle();
    }
    public validateFaqTypeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validFaqTypeLibelle = false;
        } else {
            this.validFaqTypeLibelle = true;
        }
    }






    get validFaqTypeLibelle(): boolean {
        return this._validFaqTypeLibelle;
    }
    set validFaqTypeLibelle(value: boolean) {
        this._validFaqTypeLibelle = value;
    }

}
