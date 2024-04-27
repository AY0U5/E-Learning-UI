import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {GroupeEtudeDto} from 'src/app/shared/model/grpe/GroupeEtude.model';
import {GroupeEtudeCriteria} from 'src/app/shared/criteria/grpe/GroupeEtudeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class GroupeEtudeAdminService extends AbstractService<GroupeEtudeDto, GroupeEtudeCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): GroupeEtudeDto {
        return new GroupeEtudeDto();
    }

    public constrcutCriteria(): GroupeEtudeCriteria {
        return new GroupeEtudeCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/groupeEtude/';
    }
}
