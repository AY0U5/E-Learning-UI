import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionCriteria} from 'src/app/shared/criteria/quiz/QuestionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {QuizDto} from "../../../model/quiz/Quiz.model";


@Injectable({
  providedIn: 'root'
})
export class QuestionAdminService extends AbstractService<QuestionDto, QuestionCriteria> {
    //
    private _itemQuestionshow: QuestionDto;
    private _toaddimage: boolean = false;
    private _toaddvideo: boolean = false;


    get toaddimage(): boolean {
        return this._toaddimage;
    }

    set toaddimage(value: boolean) {
        this._toaddimage = value;
    }

    get toaddvideo(): boolean {
        return this._toaddvideo;
    }

    set toaddvideo(value: boolean) {
        this._toaddvideo = value;
    }

//


    public get itemQuestionshow(): QuestionDto {
        if (this._itemQuestionshow == null) {
            this._itemQuestionshow = this.constrcutDto();
        }
        return this._itemQuestionshow;
    }

    public set itemQuestionshow(value: QuestionDto) {
        this._itemQuestionshow = value;
    }
    //


    private _itemsOfQuiz : Array<QuestionDto>;

    public get itemsOfQuiz(): Array<QuestionDto> {
        if (this._itemsOfQuiz == null) {
            this._itemsOfQuiz = new Array<QuestionDto>();
        }
        return this._itemsOfQuiz;
    }

    public set itemsOfQuiz(value: Array<QuestionDto>) {
        this._itemsOfQuiz = value;
    }


    public findBylibelle(item: QuestionDto): Observable<QuestionDto> {
        return this.http.get<QuestionDto>(this.API + 'lib/' + item.libelle   );
    }
    //
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
