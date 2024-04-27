import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FaqProfDto} from 'src/app/shared/model/faq/FaqProf.model';
import {FaqProfCriteria} from 'src/app/shared/criteria/faq/FaqProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FaqProfAdminService extends AbstractService<FaqProfDto, FaqProfCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FaqProfDto {
        return new FaqProfDto();
    }

    public constrcutCriteria(): FaqProfCriteria {
        return new FaqProfCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/faqProf/';
    }
}
