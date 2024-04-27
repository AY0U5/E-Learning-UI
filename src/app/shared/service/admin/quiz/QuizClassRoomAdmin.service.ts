import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {QuizClassRoomDto} from 'src/app/shared/model/quiz/QuizClassRoom.model';
import {QuizClassRoomCriteria} from 'src/app/shared/criteria/quiz/QuizClassRoomCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class QuizClassRoomAdminService extends AbstractService<QuizClassRoomDto, QuizClassRoomCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): QuizClassRoomDto {
        return new QuizClassRoomDto();
    }

    public constrcutCriteria(): QuizClassRoomCriteria {
        return new QuizClassRoomCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/quizClassRoom/';
    }
}
