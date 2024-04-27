import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {CentreDto} from 'src/app/shared/model/courseref/Centre.model';
import {CentreCriteria} from 'src/app/shared/criteria/courseref/CentreCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class CentreAdminService extends AbstractService<CentreDto, CentreCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): CentreDto {
        return new CentreDto();
    }

    public constrcutCriteria(): CentreCriteria {
        return new CentreCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/centre/';
    }
}
