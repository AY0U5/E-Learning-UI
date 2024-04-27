import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FreeTrialStudentEmailTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialStudentEmailTemplateAdmin.service';
import {FreeTrialStudentEmailTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialStudentEmailTemplateCriteria.model';



@Component({
  selector: 'app-free-trial-student-email-template-edit-admin',
  templateUrl: './free-trial-student-email-template-edit-admin.component.html'
})
export class FreeTrialStudentEmailTemplateEditAdminComponent extends AbstractEditController<FreeTrialStudentEmailTemplateDto, FreeTrialStudentEmailTemplateCriteria, FreeTrialStudentEmailTemplateAdminService>   implements OnInit {






    constructor( private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateAdminService ) {
        super(freeTrialStudentEmailTemplateService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
