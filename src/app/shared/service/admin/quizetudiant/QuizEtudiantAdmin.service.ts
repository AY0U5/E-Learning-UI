import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {QuizEtudiantDto} from 'src/app/shared/model/quizetudiant/QuizEtudiant.model';
import {QuizEtudiantCriteria} from 'src/app/shared/criteria/quizetudiant/QuizEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class QuizEtudiantAdminService extends AbstractService<QuizEtudiantDto, QuizEtudiantCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): QuizEtudiantDto {
        return new QuizEtudiantDto();
    }

    public constrcutCriteria(): QuizEtudiantCriteria {
        return new QuizEtudiantCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/quizEtudiant/';
    }
}
