import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ServicesDto} from 'src/app/shared/model/freetrial/Services.model';
import {ServicesCriteria} from 'src/app/shared/criteria/freetrial/ServicesCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ServicesAdminService extends AbstractService<ServicesDto, ServicesCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ServicesDto {
        return new ServicesDto();
    }

    public constrcutCriteria(): ServicesCriteria {
        return new ServicesCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/services/';
    }
}
