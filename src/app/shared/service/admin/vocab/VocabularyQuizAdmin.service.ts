import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {VocabularyQuizDto} from 'src/app/shared/model/vocab/VocabularyQuiz.model';
import {VocabularyQuizCriteria} from 'src/app/shared/criteria/vocab/VocabularyQuizCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class VocabularyQuizAdminService extends AbstractService<VocabularyQuizDto, VocabularyQuizCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): VocabularyQuizDto {
        return new VocabularyQuizDto();
    }

    public constrcutCriteria(): VocabularyQuizCriteria {
        return new VocabularyQuizCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/vocabularyQuiz/';
    }
}
