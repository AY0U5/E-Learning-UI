import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {SessionCoursDto} from 'src/app/shared/model/learning/SessionCours.model';
import {SessionCoursCriteria} from 'src/app/shared/criteria/learning/SessionCoursCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class SessionCoursAdminService extends AbstractService<SessionCoursDto, SessionCoursCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): SessionCoursDto {
        return new SessionCoursDto();
    }

    public constrcutCriteria(): SessionCoursCriteria {
        return new SessionCoursCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/sessionCours/';
    }
}
