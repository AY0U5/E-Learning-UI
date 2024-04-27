import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialTeacherWhatsTemplateCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FreeTrialTeacherWhatsTemplateAdminService extends AbstractService<FreeTrialTeacherWhatsTemplateDto, FreeTrialTeacherWhatsTemplateCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FreeTrialTeacherWhatsTemplateDto {
        return new FreeTrialTeacherWhatsTemplateDto();
    }

    public constrcutCriteria(): FreeTrialTeacherWhatsTemplateCriteria {
        return new FreeTrialTeacherWhatsTemplateCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/freeTrialTeacherWhatsTemplate/';
    }
}
