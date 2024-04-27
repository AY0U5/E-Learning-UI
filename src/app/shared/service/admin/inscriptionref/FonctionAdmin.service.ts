import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FonctionDto} from 'src/app/shared/model/inscriptionref/Fonction.model';
import {FonctionCriteria} from 'src/app/shared/criteria/inscriptionref/FonctionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FonctionAdminService extends AbstractService<FonctionDto, FonctionCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FonctionDto {
        return new FonctionDto();
    }

    public constrcutCriteria(): FonctionCriteria {
        return new FonctionCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/fonction/';
    }
}
