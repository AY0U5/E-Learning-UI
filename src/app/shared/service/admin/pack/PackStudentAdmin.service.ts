import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {PackStudentDto} from 'src/app/shared/model/pack/PackStudent.model';
import {PackStudentCriteria} from 'src/app/shared/criteria/pack/PackStudentCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PackStudentAdminService extends AbstractService<PackStudentDto, PackStudentCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): PackStudentDto {
        return new PackStudentDto();
    }

    public constrcutCriteria(): PackStudentCriteria {
        return new PackStudentCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/packStudent/';
    }
}
