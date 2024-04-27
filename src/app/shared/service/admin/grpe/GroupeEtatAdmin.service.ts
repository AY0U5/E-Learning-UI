import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {GroupeEtatDto} from 'src/app/shared/model/grpe/GroupeEtat.model';
import {GroupeEtatCriteria} from 'src/app/shared/criteria/grpe/GroupeEtatCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class GroupeEtatAdminService extends AbstractService<GroupeEtatDto, GroupeEtatCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): GroupeEtatDto {
        return new GroupeEtatDto();
    }

    public constrcutCriteria(): GroupeEtatCriteria {
        return new GroupeEtatCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/groupeEtat/';
    }
}
