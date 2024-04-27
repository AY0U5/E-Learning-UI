import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FreeTrialformuleDto} from 'src/app/shared/model/freetrial/FreeTrialformule.model';
import {FreeTrialformuleCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialformuleCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FreeTrialformuleAdminService extends AbstractService<FreeTrialformuleDto, FreeTrialformuleCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FreeTrialformuleDto {
        return new FreeTrialformuleDto();
    }

    public constrcutCriteria(): FreeTrialformuleCriteria {
        return new FreeTrialformuleCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/freeTrialformule/';
    }
}
