import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ProfReviewDto} from 'src/app/shared/model/review/ProfReview.model';
import {ProfReviewCriteria} from 'src/app/shared/criteria/review/ProfReviewCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ProfReviewAdminService extends AbstractService<ProfReviewDto, ProfReviewCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ProfReviewDto {
        return new ProfReviewDto();
    }

    public constrcutCriteria(): ProfReviewCriteria {
        return new ProfReviewCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/profReview/';
    }
}
