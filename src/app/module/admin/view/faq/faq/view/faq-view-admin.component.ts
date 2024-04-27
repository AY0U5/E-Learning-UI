import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FaqAdminService} from 'src/app/shared/service/admin/faq/FaqAdmin.service';
import {FaqDto} from 'src/app/shared/model/faq/Faq.model';
import {FaqCriteria} from 'src/app/shared/criteria/faq/FaqCriteria.model';

import {FaqTypeDto} from 'src/app/shared/model/faq/FaqType.model';
import {FaqTypeAdminService} from 'src/app/shared/service/admin/faq/FaqTypeAdmin.service';
@Component({
  selector: 'app-faq-view-admin',
  templateUrl: './faq-view-admin.component.html'
})
export class FaqViewAdminComponent extends AbstractViewController<FaqDto, FaqCriteria, FaqAdminService> implements OnInit {


    constructor(private faqService: FaqAdminService, private faqTypeService: FaqTypeAdminService){
        super(faqService);
    }

    ngOnInit(): void {
    }


    get faqType(): FaqTypeDto {
       return this.faqTypeService.item;
    }
    set faqType(value: FaqTypeDto) {
        this.faqTypeService.item = value;
    }
    get faqTypes(): Array<FaqTypeDto> {
       return this.faqTypeService.items;
    }
    set faqTypes(value: Array<FaqTypeDto>) {
        this.faqTypeService.items = value;
    }


}
