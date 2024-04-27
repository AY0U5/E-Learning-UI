import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {StatutSocialDto} from 'src/app/shared/model/inscriptionref/StatutSocial.model';
import {StatutSocialCriteria} from 'src/app/shared/criteria/inscriptionref/StatutSocialCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class StatutSocialAdminService extends AbstractService<StatutSocialDto, StatutSocialCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): StatutSocialDto {
        return new StatutSocialDto();
    }

    public constrcutCriteria(): StatutSocialCriteria {
        return new StatutSocialCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/statutSocial/';
    }
}
