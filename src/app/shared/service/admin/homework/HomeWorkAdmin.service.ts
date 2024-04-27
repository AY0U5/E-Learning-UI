import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkCriteria} from 'src/app/shared/criteria/homework/HomeWorkCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class HomeWorkAdminService extends AbstractService<HomeWorkDto, HomeWorkCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): HomeWorkDto {
        return new HomeWorkDto();
    }

    public constrcutCriteria(): HomeWorkCriteria {
        return new HomeWorkCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/homeWork/';
    }
}
