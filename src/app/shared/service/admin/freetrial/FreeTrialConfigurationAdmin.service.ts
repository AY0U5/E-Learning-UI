import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FreeTrialConfigurationDto} from 'src/app/shared/model/freetrial/FreeTrialConfiguration.model';
import {FreeTrialConfigurationCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialConfigurationCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FreeTrialConfigurationAdminService extends AbstractService<FreeTrialConfigurationDto, FreeTrialConfigurationCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FreeTrialConfigurationDto {
        return new FreeTrialConfigurationDto();
    }

    public constrcutCriteria(): FreeTrialConfigurationCriteria {
        return new FreeTrialConfigurationCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/freeTrialConfiguration/';
    }
}
