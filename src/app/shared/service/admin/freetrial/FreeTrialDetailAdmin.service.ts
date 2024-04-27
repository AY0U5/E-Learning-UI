import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FreeTrialDetailDto} from 'src/app/shared/model/freetrial/FreeTrialDetail.model';
import {FreeTrialDetailCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialDetailCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FreeTrialDetailAdminService extends AbstractService<FreeTrialDetailDto, FreeTrialDetailCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FreeTrialDetailDto {
        return new FreeTrialDetailDto();
    }

    public constrcutCriteria(): FreeTrialDetailCriteria {
        return new FreeTrialDetailCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/freeTrialDetail/';
    }
}
