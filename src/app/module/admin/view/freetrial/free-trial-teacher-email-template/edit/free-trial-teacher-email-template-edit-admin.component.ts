import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FreeTrialTeacherEmailTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialTeacherEmailTemplateAdmin.service';
import {FreeTrialTeacherEmailTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialTeacherEmailTemplateCriteria.model';



@Component({
  selector: 'app-free-trial-teacher-email-template-edit-admin',
  templateUrl: './free-trial-teacher-email-template-edit-admin.component.html'
})
export class FreeTrialTeacherEmailTemplateEditAdminComponent extends AbstractEditController<FreeTrialTeacherEmailTemplateDto, FreeTrialTeacherEmailTemplateCriteria, FreeTrialTeacherEmailTemplateAdminService>   implements OnInit {






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
