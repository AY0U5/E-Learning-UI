import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FaqProfAdminService} from 'src/app/shared/service/admin/faq/FaqProfAdmin.service';
import {FaqProfDto} from 'src/app/shared/model/faq/FaqProf.model';
import {FaqProfCriteria} from 'src/app/shared/criteria/faq/FaqProfCriteria.model';

import {FaqTypeDto} from 'src/app/shared/model/faq/FaqType.model';
import {FaqTypeAdminService} from 'src/app/shared/service/admin/faq/FaqTypeAdmin.service';
import {AdminDto} from 'src/app/shared/model/alc/Admin.model';
import {AdminAdminService} from 'src/app/shared/service/admin/alc/AdminAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-faq-prof-view-admin',
  templateUrl: './faq-prof-view-admin.component.html'
})
export class FaqProfViewAdminComponent extends AbstractViewController<FaqProfDto, FaqProfCriteria, FaqProfAdminService> implements OnInit {


    constructor(private faqProfService: FaqProfAdminService, private faqTypeService: FaqTypeAdminService, private adminService: AdminAdminService, private profService: ProfAdminService){
        super(faqProfService);
    }

    ngOnInit(): void {
    }


    get prof(): ProfDto {
       return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs(): Array<ProfDto> {
       return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
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
    get admin(): AdminDto {
       return this.adminService.item;
    }
    set admin(value: AdminDto) {
        this.adminService.item = value;
    }
    get admins(): Array<AdminDto> {
       return this.adminService.items;
    }
    set admins(value: Array<AdminDto>) {
        this.adminService.items = value;
    }


}
