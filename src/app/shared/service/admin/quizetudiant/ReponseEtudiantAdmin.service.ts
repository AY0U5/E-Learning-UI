import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ReponseEtudiantDto} from 'src/app/shared/model/quizetudiant/ReponseEtudiant.model';
import {ReponseEtudiantCriteria} from 'src/app/shared/criteria/quizetudiant/ReponseEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ReponseEtudiantAdminService extends AbstractService<ReponseEtudiantDto, ReponseEtudiantCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ReponseEtudiantDto {
        return new ReponseEtudiantDto();
    }

    public constrcutCriteria(): ReponseEtudiantCriteria {
        return new ReponseEtudiantCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/reponseEtudiant/';
    }
}
