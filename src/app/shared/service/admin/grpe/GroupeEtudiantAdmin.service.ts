import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {GroupeEtudiantDto} from 'src/app/shared/model/grpe/GroupeEtudiant.model';
import {GroupeEtudiantCriteria} from 'src/app/shared/criteria/grpe/GroupeEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class GroupeEtudiantAdminService extends AbstractService<GroupeEtudiantDto, GroupeEtudiantCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): GroupeEtudiantDto {
        return new GroupeEtudiantDto();
    }

    public constrcutCriteria(): GroupeEtudiantCriteria {
        return new GroupeEtudiantCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/groupeEtudiant/';
    }
}
