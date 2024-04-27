import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {PriceAdminService} from 'src/app/shared/service/admin/price/PriceAdmin.service';
import {PriceDto} from 'src/app/shared/model/price/Price.model';
import {PriceCriteria} from 'src/app/shared/criteria/price/PriceCriteria.model';
@Component({
  selector: 'app-price-create-admin',
  templateUrl: './price-create-admin.component.html'
})
export class PriceCreateAdminComponent extends AbstractCreateController<PriceDto, PriceCriteria, PriceAdminService>  implements OnInit {



   private _validPriceLib = true;

    constructor( private priceService: PriceAdminService ) {
        super(priceService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validPriceLib = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePriceLib();
    }

    public validatePriceLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
        this.errorMessages.push('Lib non valide');
        this.validPriceLib = false;
        } else {
            this.validPriceLib = true;
        }
    }






    get validPriceLib(): boolean {
        return this._validPriceLib;
    }

    set validPriceLib(value: boolean) {
         this._validPriceLib = value;
    }



}
