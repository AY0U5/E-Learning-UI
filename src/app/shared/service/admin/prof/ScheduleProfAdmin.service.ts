import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ScheduleProfDto} from 'src/app/shared/model/prof/ScheduleProf.model';
import {ScheduleProfCriteria} from 'src/app/shared/criteria/prof/ScheduleProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ScheduleProfAdminService extends AbstractService<ScheduleProfDto, ScheduleProfCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ScheduleProfDto {
        return new ScheduleProfDto();
    }

    public constrcutCriteria(): ScheduleProfCriteria {
        return new ScheduleProfCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/scheduleProf/';
    }
}
