import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursCriteria} from 'src/app/shared/criteria/course/ParcoursCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ParcoursAdminService extends AbstractService<ParcoursDto, ParcoursCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ParcoursDto {
        return new ParcoursDto();
    }

    public constrcutCriteria(): ParcoursCriteria {
        return new ParcoursCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/parcours/';
    }
}
