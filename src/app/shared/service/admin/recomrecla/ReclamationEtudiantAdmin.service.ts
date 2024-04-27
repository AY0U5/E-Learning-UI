import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ReclamationEtudiantDto} from 'src/app/shared/model/recomrecla/ReclamationEtudiant.model';
import {ReclamationEtudiantCriteria} from 'src/app/shared/criteria/recomrecla/ReclamationEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ReclamationEtudiantAdminService extends AbstractService<ReclamationEtudiantDto, ReclamationEtudiantCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ReclamationEtudiantDto {
        return new ReclamationEtudiantDto();
    }

    public constrcutCriteria(): ReclamationEtudiantCriteria {
        return new ReclamationEtudiantCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/reclamationEtudiant/';
    }
}
