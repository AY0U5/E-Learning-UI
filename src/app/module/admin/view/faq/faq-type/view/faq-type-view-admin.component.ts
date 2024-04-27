import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FaqTypeAdminService} from 'src/app/shared/service/admin/faq/FaqTypeAdmin.service';
import {FaqTypeDto} from 'src/app/shared/model/faq/FaqType.model';
import {FaqTypeCriteria} from 'src/app/shared/criteria/faq/FaqTypeCriteria.model';

@Component({
  selector: 'app-faq-type-view-admin',
  templateUrl: './faq-type-view-admin.component.html'
})
export class FaqTypeViewAdminComponent extends AbstractViewController<FaqTypeDto, FaqTypeCriteria, FaqTypeAdminService> implements OnInit {


    constructor(private faqTypeService: FaqTypeAdminService){
        super(faqTypeService);
    }

    ngOnInit(): void {
    }




}
