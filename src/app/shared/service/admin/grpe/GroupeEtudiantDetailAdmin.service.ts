import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {GroupeEtudiantDetailDto} from 'src/app/shared/model/grpe/GroupeEtudiantDetail.model';
import {GroupeEtudiantDetailCriteria} from 'src/app/shared/criteria/grpe/GroupeEtudiantDetailCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class GroupeEtudiantDetailAdminService extends AbstractService<GroupeEtudiantDetailDto, GroupeEtudiantDetailCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): GroupeEtudiantDetailDto {
        return new GroupeEtudiantDetailDto();
    }

    public constrcutCriteria(): GroupeEtudiantDetailCriteria {
        return new GroupeEtudiantDetailCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/groupeEtudiantDetail/';
    }
}
