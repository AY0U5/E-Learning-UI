import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ClassAverageBonusDto} from 'src/app/shared/model/common/ClassAverageBonus.model';
import {ClassAverageBonusCriteria} from 'src/app/shared/criteria/common/ClassAverageBonusCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ClassAverageBonusAdminService extends AbstractService<ClassAverageBonusDto, ClassAverageBonusCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ClassAverageBonusDto {
        return new ClassAverageBonusDto();
    }

    public constrcutCriteria(): ClassAverageBonusCriteria {
        return new ClassAverageBonusCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/classAverageBonus/';
    }
}
