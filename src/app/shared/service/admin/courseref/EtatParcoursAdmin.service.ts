import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EtatParcoursDto} from 'src/app/shared/model/courseref/EtatParcours.model';
import {EtatParcoursCriteria} from 'src/app/shared/criteria/courseref/EtatParcoursCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
    providedIn: 'root'
})
export class EtatParcoursAdminService extends AbstractService<EtatParcoursDto, EtatParcoursCriteria> {
    constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EtatParcoursDto {
        return new EtatParcoursDto();
    }

    public constrcutCriteria(): EtatParcoursCriteria {
        return new EtatParcoursCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/etatParcours/';
    }
}
