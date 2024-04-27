import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TeacherLocalityAdminService} from 'src/app/shared/service/admin/inscriptionref/TeacherLocalityAdmin.service';
import {TeacherLocalityDto} from 'src/app/shared/model/inscriptionref/TeacherLocality.model';
import {TeacherLocalityCriteria} from 'src/app/shared/criteria/inscriptionref/TeacherLocalityCriteria.model';

@Component({
  selector: 'app-teacher-locality-view-admin',
  templateUrl: './teacher-locality-view-admin.component.html'
})
export class TeacherLocalityViewAdminComponent extends AbstractViewController<TeacherLocalityDto, TeacherLocalityCriteria, TeacherLocalityAdminService> implements OnInit {


    constructor(private teacherLocalityService: TeacherLocalityAdminService){
        super(teacherLocalityService);
    }

    ngOnInit(): void {
    }




}
