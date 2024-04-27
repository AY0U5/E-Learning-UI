import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeTeacherAdminService} from 'src/app/shared/service/admin/prof/TypeTeacherAdmin.service';
import {TypeTeacherDto} from 'src/app/shared/model/prof/TypeTeacher.model';
import {TypeTeacherCriteria} from 'src/app/shared/criteria/prof/TypeTeacherCriteria.model';

@Component({
  selector: 'app-type-teacher-view-admin',
  templateUrl: './type-teacher-view-admin.component.html'
})
export class TypeTeacherViewAdminComponent extends AbstractViewController<TypeTeacherDto, TypeTeacherCriteria, TypeTeacherAdminService> implements OnInit {


    constructor(private typeTeacherService: TypeTeacherAdminService){
        super(typeTeacherService);
    }

    ngOnInit(): void {
    }




}
