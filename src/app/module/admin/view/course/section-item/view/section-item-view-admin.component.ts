import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {SectionItemAdminService} from 'src/app/shared/service/admin/course/SectionItemAdmin.service';
import {SectionItemDto} from 'src/app/shared/model/course/SectionItem.model';
import {SectionItemCriteria} from 'src/app/shared/criteria/course/SectionItemCriteria.model';

import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
@Component({
  selector: 'app-section-item-view-admin',
  templateUrl: './section-item-view-admin.component.html'
})
export class SectionItemViewAdminComponent extends AbstractViewController<SectionItemDto, SectionItemCriteria, SectionItemAdminService> implements OnInit {


    constructor(private sectionItemService: SectionItemAdminService, private sectionService: SectionAdminService){
        super(sectionItemService);
    }

    ngOnInit(): void {
    }


    get section(): SectionDto {
       return this.sectionService.item;
    }
    set section(value: SectionDto) {
        this.sectionService.item = value;
    }
    get sections(): Array<SectionDto> {
       return this.sectionService.items;
    }
    set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
    }


}
