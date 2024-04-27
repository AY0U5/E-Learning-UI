import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {SalaryDto} from 'src/app/shared/model/salary/Salary.model';
import {SalaryCriteria} from 'src/app/shared/criteria/salary/SalaryCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class SalaryAdminService extends AbstractService<SalaryDto, SalaryCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): SalaryDto {
        return new SalaryDto();
    }

    public constrcutCriteria(): SalaryCriteria {
        return new SalaryCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/salary/';
    }
}
