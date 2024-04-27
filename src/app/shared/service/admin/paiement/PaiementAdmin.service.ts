import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {PaiementDto} from 'src/app/shared/model/paiement/Paiement.model';
import {PaiementCriteria} from 'src/app/shared/criteria/paiement/PaiementCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PaiementAdminService extends AbstractService<PaiementDto, PaiementCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): PaiementDto {
        return new PaiementDto();
    }

    public constrcutCriteria(): PaiementCriteria {
        return new PaiementCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/paiement/';
    }
}
