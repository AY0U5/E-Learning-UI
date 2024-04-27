import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PriceAdminService} from 'src/app/shared/service/admin/price/PriceAdmin.service';
import {PriceDto} from 'src/app/shared/model/price/Price.model';
import {PriceCriteria} from 'src/app/shared/criteria/price/PriceCriteria.model';

@Component({
  selector: 'app-price-view-admin',
  templateUrl: './price-view-admin.component.html'
})
export class PriceViewAdminComponent extends AbstractViewController<PriceDto, PriceCriteria, PriceAdminService> implements OnInit {


    constructor(private priceService: PriceAdminService){
        super(priceService);
    }

    ngOnInit(): void {
    }




}
