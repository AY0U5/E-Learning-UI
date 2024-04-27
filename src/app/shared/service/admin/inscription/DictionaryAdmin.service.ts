import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {DictionaryDto} from 'src/app/shared/model/inscription/Dictionary.model';
import {DictionaryCriteria} from 'src/app/shared/criteria/inscription/DictionaryCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class DictionaryAdminService extends AbstractService<DictionaryDto, DictionaryCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): DictionaryDto {
        return new DictionaryDto();
    }

    public constrcutCriteria(): DictionaryCriteria {
        return new DictionaryCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/dictionary/';
    }
}
