import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FreeTrialTeacherWhatsTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialTeacherWhatsTemplateAdmin.service';
import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialTeacherWhatsTemplateCriteria.model';
@Component({
  selector: 'app-free-trial-teacher-whats-template-create-admin',
  templateUrl: './free-trial-teacher-whats-template-create-admin.component.html'
})
export class FreeTrialTeacherWhatsTemplateCreateAdminComponent extends AbstractCreateController<FreeTrialTeacherWhatsTemplateDto, FreeTrialTeacherWhatsTemplateCriteria, FreeTrialTeacherWhatsTemplateAdminService>  implements OnInit {




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
