import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TypeDeQuestionDto} from 'src/app/shared/model/quizref/TypeDeQuestion.model';
import {TypeDeQuestionCriteria} from 'src/app/shared/criteria/quizref/TypeDeQuestionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TypeDeQuestionAdminService extends AbstractService<TypeDeQuestionDto, TypeDeQuestionCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TypeDeQuestionDto {
        return new TypeDeQuestionDto();
    }

    public constrcutCriteria(): TypeDeQuestionCriteria {
        return new TypeDeQuestionCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/typeDeQuestion/';
    }
}
