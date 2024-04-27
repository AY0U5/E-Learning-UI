import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {QuizDto} from 'src/app/shared/model/quiz/Quiz.model';
import {QuizCriteria} from 'src/app/shared/criteria/quiz/QuizCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class QuizAdminService extends AbstractService<QuizDto, QuizCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): QuizDto {
        return new QuizDto();
    }

    public constrcutCriteria(): QuizCriteria {
        return new QuizCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/quiz/';
    }
}
