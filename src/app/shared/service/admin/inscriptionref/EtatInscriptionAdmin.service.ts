import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EtatInscriptionDto} from 'src/app/shared/model/inscriptionref/EtatInscription.model';
import {EtatInscriptionCriteria} from 'src/app/shared/criteria/inscriptionref/EtatInscriptionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtatInscriptionAdminService extends AbstractService<EtatInscriptionDto, EtatInscriptionCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EtatInscriptionDto {
        return new EtatInscriptionDto();
    }

    public constrcutCriteria(): EtatInscriptionCriteria {
        return new EtatInscriptionCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/etatInscription/';
    }
}