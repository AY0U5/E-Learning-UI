import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {WorkloadBonusDto} from 'src/app/shared/model/salary/WorkloadBonus.model';
import {WorkloadBonusCriteria} from 'src/app/shared/criteria/salary/WorkloadBonusCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class WorkloadBonusAdminService extends AbstractService<WorkloadBonusDto, WorkloadBonusCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): WorkloadBonusDto {
        return new WorkloadBonusDto();
    }

    public constrcutCriteria(): WorkloadBonusCriteria {
        return new WorkloadBonusCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/workloadBonus/';
    }
}
