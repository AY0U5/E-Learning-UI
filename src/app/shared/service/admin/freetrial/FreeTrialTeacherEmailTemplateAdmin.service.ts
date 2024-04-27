import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FreeTrialTeacherEmailTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialTeacherEmailTemplateCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FreeTrialTeacherEmailTemplateAdminService extends AbstractService<FreeTrialTeacherEmailTemplateDto, FreeTrialTeacherEmailTemplateCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FreeTrialTeacherEmailTemplateDto {
        return new FreeTrialTeacherEmailTemplateDto();
    }

    public constrcutCriteria(): FreeTrialTeacherEmailTemplateCriteria {
        return new FreeTrialTeacherEmailTemplateCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/freeTrialTeacherEmailTemplate/';
    }
}
