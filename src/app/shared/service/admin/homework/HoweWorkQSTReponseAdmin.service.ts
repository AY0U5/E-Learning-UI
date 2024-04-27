import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {HoweWorkQSTReponseDto} from 'src/app/shared/model/homework/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseCriteria} from 'src/app/shared/criteria/homework/HoweWorkQSTReponseCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class HoweWorkQSTReponseAdminService extends AbstractService<HoweWorkQSTReponseDto, HoweWorkQSTReponseCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): HoweWorkQSTReponseDto {
        return new HoweWorkQSTReponseDto();
    }

    public constrcutCriteria(): HoweWorkQSTReponseCriteria {
        return new HoweWorkQSTReponseCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/howeWorkQSTReponse/';
    }
}
