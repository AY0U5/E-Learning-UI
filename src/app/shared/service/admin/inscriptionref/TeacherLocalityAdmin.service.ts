import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TeacherLocalityDto} from 'src/app/shared/model/inscriptionref/TeacherLocality.model';
import {TeacherLocalityCriteria} from 'src/app/shared/criteria/inscriptionref/TeacherLocalityCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TeacherLocalityAdminService extends AbstractService<TeacherLocalityDto, TeacherLocalityCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TeacherLocalityDto {
        return new TeacherLocalityDto();
    }

    public constrcutCriteria(): TeacherLocalityCriteria {
        return new TeacherLocalityCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/teacherLocality/';
    }
}
