import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseCriteria} from 'src/app/shared/criteria/quiz/ReponseCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ReponseAdminService extends AbstractService<ReponseDto, ReponseCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ReponseDto {
        return new ReponseDto();
    }

    public constrcutCriteria(): ReponseCriteria {
        return new ReponseCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/reponse/';
    }
}
