import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FreeTrialStudentWhatsTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialStudentWhatsTemplateAdmin.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialStudentWhatsTemplateCriteria.model';



@Component({
  selector: 'app-free-trial-student-whats-template-edit-admin',
  templateUrl: './free-trial-student-whats-template-edit-admin.component.html'
})
export class FreeTrialStudentWhatsTemplateEditAdminComponent extends AbstractEditController<FreeTrialStudentWhatsTemplateDto, FreeTrialStudentWhatsTemplateCriteria, FreeTrialStudentWhatsTemplateAdminService>   implements OnInit {






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
