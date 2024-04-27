import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TypeHomeWorkDto} from 'src/app/shared/model/homework/TypeHomeWork.model';
import {TypeHomeWorkCriteria} from 'src/app/shared/criteria/homework/TypeHomeWorkCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TypeHomeWorkAdminService extends AbstractService<TypeHomeWorkDto, TypeHomeWorkCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TypeHomeWorkDto {
        return new TypeHomeWorkDto();
    }

    public constrcutCriteria(): TypeHomeWorkCriteria {
        return new TypeHomeWorkCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/typeHomeWork/';
    }
}
