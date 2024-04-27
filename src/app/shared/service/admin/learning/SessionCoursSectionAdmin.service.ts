import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {SessionCoursSectionDto} from 'src/app/shared/model/learning/SessionCoursSection.model';
import {SessionCoursSectionCriteria} from 'src/app/shared/criteria/learning/SessionCoursSectionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class SessionCoursSectionAdminService extends AbstractService<SessionCoursSectionDto, SessionCoursSectionCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): SessionCoursSectionDto {
        return new SessionCoursSectionDto();
    }

    public constrcutCriteria(): SessionCoursSectionCriteria {
        return new SessionCoursSectionCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/sessionCoursSection/';
    }
}
