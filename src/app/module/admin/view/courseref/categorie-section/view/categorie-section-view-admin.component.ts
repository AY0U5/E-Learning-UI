import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CategorieSectionAdminService} from 'src/app/shared/service/admin/courseref/CategorieSectionAdmin.service';
import {CategorieSectionDto} from 'src/app/shared/model/courseref/CategorieSection.model';
import {CategorieSectionCriteria} from 'src/app/shared/criteria/courseref/CategorieSectionCriteria.model';

import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
import {SuperCategorieSectionDto} from 'src/app/shared/model/courseref/SuperCategorieSection.model';
import {SuperCategorieSectionAdminService} from 'src/app/shared/service/admin/courseref/SuperCategorieSectionAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {SectionItemDto} from 'src/app/shared/model/course/SectionItem.model';
import {SectionItemAdminService} from 'src/app/shared/service/admin/course/SectionItemAdmin.service';
@Component({
  selector: 'app-categorie-section-view-admin',
  templateUrl: './categorie-section-view-admin.component.html'
})
export class CategorieSectionViewAdminComponent extends AbstractViewController<CategorieSectionDto, CategorieSectionCriteria, CategorieSectionAdminService> implements OnInit {

    sections = new SectionDto();
    sectionss: Array<SectionDto> = [];

    constructor(private categorieSectionService: CategorieSectionAdminService, private sectionService: SectionAdminService, private superCategorieSectionService: SuperCategorieSectionAdminService, private coursService: CoursAdminService){
        super(categorieSectionService);
    }

    ngOnInit(): void {
    }


    get superCategorieSection(): SuperCategorieSectionDto {
       return this.superCategorieSectionService.item;
    }
    set superCategorieSection(value: SuperCategorieSectionDto) {
        this.superCategorieSectionService.item = value;
    }
    get superCategorieSections(): Array<SuperCategorieSectionDto> {
       return this.superCategorieSectionService.items;
    }
    set superCategorieSections(value: Array<SuperCategorieSectionDto>) {
        this.superCategorieSectionService.items = value;
    }
    get cours(): CoursDto {
       return this.coursService.item;
    }
    set cours(value: CoursDto) {
        this.coursService.item = value;
    }
    get courss(): Array<CoursDto> {
       return this.coursService.items;
    }
    set courss(value: Array<CoursDto>) {
        this.coursService.items = value;
    }


}
