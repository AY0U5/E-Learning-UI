import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FaqEtudiantAdminService} from 'src/app/shared/service/admin/faq/FaqEtudiantAdmin.service';
import {FaqEtudiantDto} from 'src/app/shared/model/faq/FaqEtudiant.model';
import {FaqEtudiantCriteria} from 'src/app/shared/criteria/faq/FaqEtudiantCriteria.model';

import {FaqTypeDto} from 'src/app/shared/model/faq/FaqType.model';
import {FaqTypeAdminService} from 'src/app/shared/service/admin/faq/FaqTypeAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {AdminDto} from 'src/app/shared/model/alc/Admin.model';
import {AdminAdminService} from 'src/app/shared/service/admin/alc/AdminAdmin.service';
@Component({
  selector: 'app-faq-etudiant-view-admin',
  templateUrl: './faq-etudiant-view-admin.component.html'
})
export class FaqEtudiantViewAdminComponent extends AbstractViewController<FaqEtudiantDto, FaqEtudiantCriteria, FaqEtudiantAdminService> implements OnInit {


    constructor(private faqEtudiantService: FaqEtudiantAdminService, private faqTypeService: FaqTypeAdminService, private etudiantService: EtudiantAdminService, private adminService: AdminAdminService){
        super(faqEtudiantService);
    }

    ngOnInit(): void {
    }


    get etudiant(): EtudiantDto {
       return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants(): Array<EtudiantDto> {
       return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
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
