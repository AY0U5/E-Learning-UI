import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FaqDto} from 'src/app/shared/model/faq/Faq.model';
import {FaqCriteria} from 'src/app/shared/criteria/faq/FaqCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FaqAdminService extends AbstractService<FaqDto, FaqCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FaqDto {
        return new FaqDto();
    }

    public constrcutCriteria(): FaqCriteria {
        return new FaqCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/faq/';
    }
}
