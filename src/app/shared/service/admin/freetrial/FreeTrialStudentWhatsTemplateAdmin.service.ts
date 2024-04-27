import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FreeTrialStudentWhatsTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialStudentWhatsTemplateCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FreeTrialStudentWhatsTemplateAdminService extends AbstractService<FreeTrialStudentWhatsTemplateDto, FreeTrialStudentWhatsTemplateCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FreeTrialStudentWhatsTemplateDto {
        return new FreeTrialStudentWhatsTemplateDto();
    }

    public constrcutCriteria(): FreeTrialStudentWhatsTemplateCriteria {
        return new FreeTrialStudentWhatsTemplateCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/freeTrialStudentWhatsTemplate/';
    }
}
