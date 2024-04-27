import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {AdminDto} from 'src/app/shared/model/alc/Admin.model';
import {AdminCriteria} from 'src/app/shared/criteria/alc/AdminCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class AdminAdminService extends AbstractService<AdminDto, AdminCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): AdminDto {
        return new AdminDto();
    }

    public constrcutCriteria(): AdminCriteria {
        return new AdminCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/admin/';
    }
}
