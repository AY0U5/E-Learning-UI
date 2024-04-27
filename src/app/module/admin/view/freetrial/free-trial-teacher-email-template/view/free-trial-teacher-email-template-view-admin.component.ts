import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialTeacherEmailTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialTeacherEmailTemplateAdmin.service';
import {FreeTrialTeacherEmailTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialTeacherEmailTemplateCriteria.model';

@Component({
  selector: 'app-free-trial-teacher-email-template-view-admin',
  templateUrl: './free-trial-teacher-email-template-view-admin.component.html'
})
export class FreeTrialTeacherEmailTemplateViewAdminComponent extends AbstractViewController<FreeTrialTeacherEmailTemplateDto, FreeTrialTeacherEmailTemplateCriteria, FreeTrialTeacherEmailTemplateAdminService> implements OnInit {


    constructor(private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateAdminService){
        super(freeTrialTeacherEmailTemplateService);
    }

    ngOnInit(): void {
    }




}
