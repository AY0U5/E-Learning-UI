import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {VocabularyDto} from 'src/app/shared/model/vocab/Vocabulary.model';
import {VocabularyCriteria} from 'src/app/shared/criteria/vocab/VocabularyCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class VocabularyAdminService extends AbstractService<VocabularyDto, VocabularyCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): VocabularyDto {
        return new VocabularyDto();
    }

    public constrcutCriteria(): VocabularyCriteria {
        return new VocabularyCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/vocabulary/';
    }
}
