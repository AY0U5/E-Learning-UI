import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {LangueDto} from 'src/app/shared/model/inscriptionref/Langue.model';
import {LangueCriteria} from 'src/app/shared/criteria/inscriptionref/LangueCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class LangueAdminService extends AbstractService<LangueDto, LangueCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): LangueDto {
        return new LangueDto();
    }

    public constrcutCriteria(): LangueCriteria {
        return new LangueCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/langue/';
    }
}
