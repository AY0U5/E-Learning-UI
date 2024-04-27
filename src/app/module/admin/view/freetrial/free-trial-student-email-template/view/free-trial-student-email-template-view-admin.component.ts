import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialStudentEmailTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialStudentEmailTemplateAdmin.service';
import {FreeTrialStudentEmailTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialStudentEmailTemplateCriteria.model';

@Component({
  selector: 'app-free-trial-student-email-template-view-admin',
  templateUrl: './free-trial-student-email-template-view-admin.component.html'
})
export class FreeTrialStudentEmailTemplateViewAdminComponent extends AbstractViewController<FreeTrialStudentEmailTemplateDto, FreeTrialStudentEmailTemplateCriteria, FreeTrialStudentEmailTemplateAdminService> implements OnInit {


    constructor(private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateAdminService){
        super(freeTrialStudentEmailTemplateService);
    }

    ngOnInit(): void {
    }




}
