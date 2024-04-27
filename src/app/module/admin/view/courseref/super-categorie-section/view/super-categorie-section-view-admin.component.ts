import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {SuperCategorieSectionAdminService} from 'src/app/shared/service/admin/courseref/SuperCategorieSectionAdmin.service';
import {SuperCategorieSectionDto} from 'src/app/shared/model/courseref/SuperCategorieSection.model';
import {SuperCategorieSectionCriteria} from 'src/app/shared/criteria/courseref/SuperCategorieSectionCriteria.model';

import {CategorieSectionDto} from 'src/app/shared/model/courseref/CategorieSection.model';
import {CategorieSectionAdminService} from 'src/app/shared/service/admin/courseref/CategorieSectionAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
@Component({
  selector: 'app-super-categorie-section-view-admin',
  templateUrl: './super-categorie-section-view-admin.component.html'
})
export class SuperCategorieSectionViewAdminComponent extends AbstractViewController<SuperCategorieSectionDto, SuperCategorieSectionCriteria, SuperCategorieSectionAdminService> implements OnInit {

    categorieSections = new CategorieSectionDto();
    categorieSectionss: Array<CategorieSectionDto> = [];

    constructor(private superCategorieSectionService: SuperCategorieSectionAdminService, private categorieSectionService: CategorieSectionAdminService){
        super(superCategorieSectionService);
    }

    ngOnInit(): void {
    }




}
