import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {HomeWorkQuestionDto} from 'src/app/shared/model/homework/HomeWorkQuestion.model';
import {HomeWorkQuestionCriteria} from 'src/app/shared/criteria/homework/HomeWorkQuestionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class HomeWorkQuestionAdminService extends AbstractService<HomeWorkQuestionDto, HomeWorkQuestionCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): HomeWorkQuestionDto {
        return new HomeWorkQuestionDto();
    }

    public constrcutCriteria(): HomeWorkQuestionCriteria {
        return new HomeWorkQuestionCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/homeWorkQuestion/';
    }
}
