import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeHomeWorkAdminService} from 'src/app/shared/service/admin/homework/TypeHomeWorkAdmin.service';
import {TypeHomeWorkDto} from 'src/app/shared/model/homework/TypeHomeWork.model';
import {TypeHomeWorkCriteria} from 'src/app/shared/criteria/homework/TypeHomeWorkCriteria.model';
@Component({
  selector: 'app-type-home-work-create-admin',
  templateUrl: './type-home-work-create-admin.component.html'
})
export class TypeHomeWorkCreateAdminComponent extends AbstractCreateController<TypeHomeWorkDto, TypeHomeWorkCriteria, TypeHomeWorkAdminService>  implements OnInit {



   private _validTypeHomeWorkCode = true;
   private _validTypeHomeWorkLib = true;

    constructor( private typeHomeWorkService: TypeHomeWorkAdminService ) {
        super(typeHomeWorkService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validTypeHomeWorkCode = value;
        this.validTypeHomeWorkLib = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeHomeWorkCode();
        this.validateTypeHomeWorkLib();
    }

    public validateTypeHomeWorkCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypeHomeWorkCode = false;
        } else {
            this.validTypeHomeWorkCode = true;
        }
    }
    public validateTypeHomeWorkLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
        this.errorMessages.push('Lib non valide');
        this.validTypeHomeWorkLib = false;
        } else {
            this.validTypeHomeWorkLib = true;
        }
    }






    get validTypeHomeWorkCode(): boolean {
        return this._validTypeHomeWorkCode;
    }

    set validTypeHomeWorkCode(value: boolean) {
         this._validTypeHomeWorkCode = value;
    }
    get validTypeHomeWorkLib(): boolean {
        return this._validTypeHomeWorkLib;
    }

    set validTypeHomeWorkLib(value: boolean) {
         this._validTypeHomeWorkLib = value;
    }



}
