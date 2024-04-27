import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TrancheHoraireProfDto} from 'src/app/shared/model/prof/TrancheHoraireProf.model';
import {TrancheHoraireProfCriteria} from 'src/app/shared/criteria/prof/TrancheHoraireProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TrancheHoraireProfAdminService extends AbstractService<TrancheHoraireProfDto, TrancheHoraireProfCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TrancheHoraireProfDto {
        return new TrancheHoraireProfDto();
    }

    public constrcutCriteria(): TrancheHoraireProfCriteria {
        return new TrancheHoraireProfCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/trancheHoraireProf/';
    }
}
