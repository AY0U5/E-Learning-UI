import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {CalendrierProfDto} from 'src/app/shared/model/prof/CalendrierProf.model';
import {CalendrierProfCriteria} from 'src/app/shared/criteria/prof/CalendrierProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class CalendrierProfAdminService extends AbstractService<CalendrierProfDto, CalendrierProfCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): CalendrierProfDto {
        return new CalendrierProfDto();
    }

    public constrcutCriteria(): CalendrierProfCriteria {
        return new CalendrierProfCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/calendrierProf/';
    }
}
