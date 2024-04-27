import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {RecommendTeacherDto} from 'src/app/shared/model/recomrecla/RecommendTeacher.model';
import {RecommendTeacherCriteria} from 'src/app/shared/criteria/recomrecla/RecommendTeacherCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class RecommendTeacherAdminService extends AbstractService<RecommendTeacherDto, RecommendTeacherCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): RecommendTeacherDto {
        return new RecommendTeacherDto();
    }

    public constrcutCriteria(): RecommendTeacherCriteria {
        return new RecommendTeacherCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/recommendTeacher/';
    }
}
