import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FaqTypeDto} from 'src/app/shared/model/faq/FaqType.model';
import {FaqTypeCriteria} from 'src/app/shared/criteria/faq/FaqTypeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FaqTypeAdminService extends AbstractService<FaqTypeDto, FaqTypeCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FaqTypeDto {
        return new FaqTypeDto();
    }

    public constrcutCriteria(): FaqTypeCriteria {
        return new FaqTypeCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/faqType/';
    }
}
