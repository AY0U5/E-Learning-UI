import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EtatSectionDto} from 'src/app/shared/model/courseref/EtatSection.model';
import {EtatSectionCriteria} from 'src/app/shared/criteria/courseref/EtatSectionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
    providedIn: 'root'
})
export class EtatSectionAdminService extends AbstractService<EtatSectionDto, EtatSectionCriteria> {
    constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EtatSectionDto {
        return new EtatSectionDto();
    }

    public constrcutCriteria(): EtatSectionCriteria {
        return new EtatSectionCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/etatSection/';
    }
}
