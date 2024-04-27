import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TypeTeacherDto} from 'src/app/shared/model/prof/TypeTeacher.model';
import {TypeTeacherCriteria} from 'src/app/shared/criteria/prof/TypeTeacherCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TypeTeacherAdminService extends AbstractService<TypeTeacherDto, TypeTeacherCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TypeTeacherDto {
        return new TypeTeacherDto();
    }

    public constrcutCriteria(): TypeTeacherCriteria {
        return new TypeTeacherCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/typeTeacher/';
    }
}
