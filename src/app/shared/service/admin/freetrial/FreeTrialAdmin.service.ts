import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FreeTrialDto} from 'src/app/shared/model/freetrial/FreeTrial.model';
import {FreeTrialCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FreeTrialAdminService extends AbstractService<FreeTrialDto, FreeTrialCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FreeTrialDto {
        return new FreeTrialDto();
    }

    public constrcutCriteria(): FreeTrialCriteria {
        return new FreeTrialCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/freeTrial/';
    }
}
