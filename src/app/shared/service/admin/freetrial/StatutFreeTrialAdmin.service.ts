import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {StatutFreeTrialDto} from 'src/app/shared/model/freetrial/StatutFreeTrial.model';
import {StatutFreeTrialCriteria} from 'src/app/shared/criteria/freetrial/StatutFreeTrialCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class StatutFreeTrialAdminService extends AbstractService<StatutFreeTrialDto, StatutFreeTrialCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): StatutFreeTrialDto {
        return new StatutFreeTrialDto();
    }

    public constrcutCriteria(): StatutFreeTrialCriteria {
        return new StatutFreeTrialCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/statutFreeTrial/';
    }
}
