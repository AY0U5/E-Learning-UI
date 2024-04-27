import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ReclamationProfDto} from 'src/app/shared/model/recomrecla/ReclamationProf.model';
import {ReclamationProfCriteria} from 'src/app/shared/criteria/recomrecla/ReclamationProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ReclamationProfAdminService extends AbstractService<ReclamationProfDto, ReclamationProfCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ReclamationProfDto {
        return new ReclamationProfDto();
    }

    public constrcutCriteria(): ReclamationProfCriteria {
        return new ReclamationProfCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/reclamationProf/';
    }
}
