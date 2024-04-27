import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ClassAverageBonusProfDto} from 'src/app/shared/model/prof/ClassAverageBonusProf.model';
import {ClassAverageBonusProfCriteria} from 'src/app/shared/criteria/prof/ClassAverageBonusProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ClassAverageBonusProfAdminService extends AbstractService<ClassAverageBonusProfDto, ClassAverageBonusProfCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ClassAverageBonusProfDto {
        return new ClassAverageBonusProfDto();
    }

    public constrcutCriteria(): ClassAverageBonusProfCriteria {
        return new ClassAverageBonusProfCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/classAverageBonusProf/';
    }
}
