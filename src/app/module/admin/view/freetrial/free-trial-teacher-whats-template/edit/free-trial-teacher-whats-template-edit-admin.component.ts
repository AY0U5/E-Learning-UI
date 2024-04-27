import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FreeTrialTeacherWhatsTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialTeacherWhatsTemplateAdmin.service';
import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialTeacherWhatsTemplateCriteria.model';



@Component({
  selector: 'app-free-trial-teacher-whats-template-edit-admin',
  templateUrl: './free-trial-teacher-whats-template-edit-admin.component.html'
})
export class FreeTrialTeacherWhatsTemplateEditAdminComponent extends AbstractEditController<FreeTrialTeacherWhatsTemplateDto, FreeTrialTeacherWhatsTemplateCriteria, FreeTrialTeacherWhatsTemplateAdminService>   implements OnInit {






    constructor( private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateAdminService ) {
        super(freeTrialTeacherWhatsTemplateService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
