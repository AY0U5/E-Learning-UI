import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {InscriptionDto} from 'src/app/shared/model/grpe/Inscription.model';
import {InscriptionCriteria} from 'src/app/shared/criteria/grpe/InscriptionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class InscriptionAdminService extends AbstractService<InscriptionDto, InscriptionCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): InscriptionDto {
        return new InscriptionDto();
    }

    public constrcutCriteria(): InscriptionCriteria {
        return new InscriptionCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/inscription/';
    }
}
