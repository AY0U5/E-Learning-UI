import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {WorkloadBonusProfDto} from 'src/app/shared/model/salary/WorkloadBonusProf.model';
import {WorkloadBonusProfCriteria} from 'src/app/shared/criteria/salary/WorkloadBonusProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class WorkloadBonusProfAdminService extends AbstractService<WorkloadBonusProfDto, WorkloadBonusProfCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): WorkloadBonusProfDto {
        return new WorkloadBonusProfDto();
    }

    public constrcutCriteria(): WorkloadBonusProfCriteria {
        return new WorkloadBonusProfCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/workloadBonusProf/';
    }
}
