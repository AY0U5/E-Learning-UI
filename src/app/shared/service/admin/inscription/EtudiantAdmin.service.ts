import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantCriteria} from 'src/app/shared/criteria/inscription/EtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtudiantAdminService extends AbstractService<EtudiantDto, EtudiantCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EtudiantDto {
        return new EtudiantDto();
    }

    public constrcutCriteria(): EtudiantCriteria {
        return new EtudiantCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/etudiant/';
    }
}
