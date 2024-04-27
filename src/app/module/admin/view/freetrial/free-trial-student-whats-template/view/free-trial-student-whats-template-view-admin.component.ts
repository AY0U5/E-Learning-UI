import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialStudentWhatsTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialStudentWhatsTemplateAdmin.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialStudentWhatsTemplateCriteria.model';

@Component({
  selector: 'app-free-trial-student-whats-template-view-admin',
  templateUrl: './free-trial-student-whats-template-view-admin.component.html'
})
export class FreeTrialStudentWhatsTemplateViewAdminComponent extends AbstractViewController<FreeTrialStudentWhatsTemplateDto, FreeTrialStudentWhatsTemplateCriteria, FreeTrialStudentWhatsTemplateAdminService> implements OnInit {


    constructor(private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateAdminService){
        super(freeTrialStudentWhatsTemplateService);
    }

    ngOnInit(): void {
    }




}
