import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {NiveauEtudeDto} from 'src/app/shared/model/inscriptionref/NiveauEtude.model';
import {NiveauEtudeCriteria} from 'src/app/shared/criteria/inscriptionref/NiveauEtudeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class NiveauEtudeAdminService extends AbstractService<NiveauEtudeDto, NiveauEtudeCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): NiveauEtudeDto {
        return new NiveauEtudeDto();
    }

    public constrcutCriteria(): NiveauEtudeCriteria {
        return new NiveauEtudeCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/niveauEtude/';
    }
}
