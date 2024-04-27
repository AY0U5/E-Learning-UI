import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EtudiantReviewDto} from 'src/app/shared/model/inscriptionref/EtudiantReview.model';
import {EtudiantReviewCriteria} from 'src/app/shared/criteria/inscriptionref/EtudiantReviewCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtudiantReviewAdminService extends AbstractService<EtudiantReviewDto, EtudiantReviewCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EtudiantReviewDto {
        return new EtudiantReviewDto();
    }

    public constrcutCriteria(): EtudiantReviewCriteria {
        return new EtudiantReviewCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/etudiantReview/';
    }
}
