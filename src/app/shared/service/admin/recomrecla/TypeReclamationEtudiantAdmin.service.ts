import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TypeReclamationEtudiantDto} from 'src/app/shared/model/recomrecla/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantCriteria} from 'src/app/shared/criteria/recomrecla/TypeReclamationEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TypeReclamationEtudiantAdminService extends AbstractService<TypeReclamationEtudiantDto, TypeReclamationEtudiantCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TypeReclamationEtudiantDto {
        return new TypeReclamationEtudiantDto();
    }

    public constrcutCriteria(): TypeReclamationEtudiantCriteria {
        return new TypeReclamationEtudiantCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/typeReclamationEtudiant/';
    }
}
