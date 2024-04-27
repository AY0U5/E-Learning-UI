import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {InteretEtudiantDto} from 'src/app/shared/model/inscriptionref/InteretEtudiant.model';
import {InteretEtudiantCriteria} from 'src/app/shared/criteria/inscriptionref/InteretEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class InteretEtudiantAdminService extends AbstractService<InteretEtudiantDto, InteretEtudiantCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): InteretEtudiantDto {
        return new InteretEtudiantDto();
    }

    public constrcutCriteria(): InteretEtudiantCriteria {
        return new InteretEtudiantCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/interetEtudiant/';
    }
}
