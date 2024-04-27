import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TypeReclamationProfDto} from 'src/app/shared/model/recomrecla/TypeReclamationProf.model';
import {TypeReclamationProfCriteria} from 'src/app/shared/criteria/recomrecla/TypeReclamationProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TypeReclamationProfAdminService extends AbstractService<TypeReclamationProfDto, TypeReclamationProfCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TypeReclamationProfDto {
        return new TypeReclamationProfDto();
    }

    public constrcutCriteria(): TypeReclamationProfCriteria {
        return new TypeReclamationProfCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/typeReclamationProf/';
    }
}
