import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {RecommendTeacherAdminService} from 'src/app/shared/service/admin/recomrecla/RecommendTeacherAdmin.service';
import {RecommendTeacherDto} from 'src/app/shared/model/recomrecla/RecommendTeacher.model';
import {RecommendTeacherCriteria} from 'src/app/shared/criteria/recomrecla/RecommendTeacherCriteria.model';

import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-recommend-teacher-view-admin',
  templateUrl: './recommend-teacher-view-admin.component.html'
})
export class RecommendTeacherViewAdminComponent extends AbstractViewController<RecommendTeacherDto, RecommendTeacherCriteria, RecommendTeacherAdminService> implements OnInit {


    constructor(private recommendTeacherService: RecommendTeacherAdminService, private profService: ProfAdminService){
        super(recommendTeacherService);
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


}
