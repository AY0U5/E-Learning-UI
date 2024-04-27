import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ClassAverageBonusAdminService} from 'src/app/shared/service/admin/common/ClassAverageBonusAdmin.service';
import {ClassAverageBonusDto} from 'src/app/shared/model/common/ClassAverageBonus.model';
import {ClassAverageBonusCriteria} from 'src/app/shared/criteria/common/ClassAverageBonusCriteria.model';
@Component({
  selector: 'app-class-average-bonus-create-admin',
  templateUrl: './class-average-bonus-create-admin.component.html'
})
export class ClassAverageBonusCreateAdminComponent extends AbstractCreateController<ClassAverageBonusDto, ClassAverageBonusCriteria, ClassAverageBonusAdminService>  implements OnInit {



   private _validClassAverageBonusCode = true;

    constructor( private classAverageBonusService: ClassAverageBonusAdminService ) {
        super(classAverageBonusService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validClassAverageBonusCode = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateClassAverageBonusCode();
    }

    public validateClassAverageBonusCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validClassAverageBonusCode = false;
        } else {
            this.validClassAverageBonusCode = true;
        }
    }






    get validClassAverageBonusCode(): boolean {
        return this._validClassAverageBonusCode;
    }

    set validClassAverageBonusCode(value: boolean) {
         this._validClassAverageBonusCode = value;
    }



}
