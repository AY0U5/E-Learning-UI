import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FreeTrialStudentWhatsTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialStudentWhatsTemplateAdmin.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialStudentWhatsTemplateCriteria.model';
@Component({
  selector: 'app-free-trial-student-whats-template-create-admin',
  templateUrl: './free-trial-student-whats-template-create-admin.component.html'
})
export class FreeTrialStudentWhatsTemplateCreateAdminComponent extends AbstractCreateController<FreeTrialStudentWhatsTemplateDto, FreeTrialStudentWhatsTemplateCriteria, FreeTrialStudentWhatsTemplateAdminService>  implements OnInit {




    constructor( private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateAdminService ) {
        super(freeTrialStudentWhatsTemplateService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
