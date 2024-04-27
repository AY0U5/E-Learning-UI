import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FreeTrialTeacherEmailTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialTeacherEmailTemplateAdmin.service';
import {FreeTrialTeacherEmailTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialTeacherEmailTemplateCriteria.model';
@Component({
  selector: 'app-free-trial-teacher-email-template-create-admin',
  templateUrl: './free-trial-teacher-email-template-create-admin.component.html'
})
export class FreeTrialTeacherEmailTemplateCreateAdminComponent extends AbstractCreateController<FreeTrialTeacherEmailTemplateDto, FreeTrialTeacherEmailTemplateCriteria, FreeTrialTeacherEmailTemplateAdminService>  implements OnInit {




    constructor( private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateAdminService ) {
        super(freeTrialTeacherEmailTemplateService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
