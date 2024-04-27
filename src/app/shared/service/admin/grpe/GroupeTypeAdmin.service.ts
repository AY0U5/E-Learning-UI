import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {GroupeTypeDto} from 'src/app/shared/model/grpe/GroupeType.model';
import {GroupeTypeCriteria} from 'src/app/shared/criteria/grpe/GroupeTypeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class GroupeTypeAdminService extends AbstractService<GroupeTypeDto, GroupeTypeCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): GroupeTypeDto {
        return new GroupeTypeDto();
    }

    public constrcutCriteria(): GroupeTypeCriteria {
        return new GroupeTypeCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/groupeType/';
    }
}
