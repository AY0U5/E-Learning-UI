import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ReponseEtudiantHomeWorkDto} from 'src/app/shared/model/homework/ReponseEtudiantHomeWork.model';
import {ReponseEtudiantHomeWorkCriteria} from 'src/app/shared/criteria/homework/ReponseEtudiantHomeWorkCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ReponseEtudiantHomeWorkAdminService extends AbstractService<ReponseEtudiantHomeWorkDto, ReponseEtudiantHomeWorkCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ReponseEtudiantHomeWorkDto {
        return new ReponseEtudiantHomeWorkDto();
    }

    public constrcutCriteria(): ReponseEtudiantHomeWorkCriteria {
        return new ReponseEtudiantHomeWorkCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/reponseEtudiantHomeWork/';
    }
}
