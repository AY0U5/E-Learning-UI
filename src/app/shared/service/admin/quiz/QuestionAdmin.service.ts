import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionCriteria} from 'src/app/shared/criteria/quiz/QuestionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class QuestionAdminService extends AbstractService<QuestionDto, QuestionCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): QuestionDto {
        return new QuestionDto();
    }

    public constrcutCriteria(): QuestionCriteria {
        return new QuestionCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/question/';
    }
}
