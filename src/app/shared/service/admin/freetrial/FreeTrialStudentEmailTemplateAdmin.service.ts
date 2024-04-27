import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FreeTrialStudentEmailTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialStudentEmailTemplateCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FreeTrialStudentEmailTemplateAdminService extends AbstractService<FreeTrialStudentEmailTemplateDto, FreeTrialStudentEmailTemplateCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FreeTrialStudentEmailTemplateDto {
        return new FreeTrialStudentEmailTemplateDto();
    }

    public constrcutCriteria(): FreeTrialStudentEmailTemplateCriteria {
        return new FreeTrialStudentEmailTemplateCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/freeTrialStudentEmailTemplate/';
    }
}
