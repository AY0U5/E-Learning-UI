import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialTeacherWhatsTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialTeacherWhatsTemplateAdmin.service';
import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialTeacherWhatsTemplateCriteria.model';

@Component({
  selector: 'app-free-trial-teacher-whats-template-view-admin',
  templateUrl: './free-trial-teacher-whats-template-view-admin.component.html'
})
export class FreeTrialTeacherWhatsTemplateViewAdminComponent extends AbstractViewController<FreeTrialTeacherWhatsTemplateDto, FreeTrialTeacherWhatsTemplateCriteria, FreeTrialTeacherWhatsTemplateAdminService> implements OnInit {


    constructor(private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateAdminService){
        super(freeTrialTeacherWhatsTemplateService);
    }

    ngOnInit(): void {
    }




}
