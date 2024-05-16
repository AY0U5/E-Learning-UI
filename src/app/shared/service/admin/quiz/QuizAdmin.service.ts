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
    private _itemQuizShow: QuizDto;
    private _addquiz : boolean = false;

    get addquiz(): boolean {
        return this._addquiz;
    }

    set addquiz(value: boolean) {
        this._addquiz = value;
    }

    public get itemQuizShow(): QuizDto {
        if (this._itemQuizShow == null) {
            this._itemQuizShow = this.constrcutDto();

        }
        return this._itemQuizShow;
    }

    public set itemQuizShow(value: QuizDto) {
        this._itemQuizShow = value;
    }


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
