import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EtatEtudiantScheduleDto} from 'src/app/shared/model/inscriptionref/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleCriteria} from 'src/app/shared/criteria/inscriptionref/EtatEtudiantScheduleCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtatEtudiantScheduleAdminService extends AbstractService<EtatEtudiantScheduleDto, EtatEtudiantScheduleCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EtatEtudiantScheduleDto {
        return new EtatEtudiantScheduleDto();
    }

    public constrcutCriteria(): EtatEtudiantScheduleCriteria {
        return new EtatEtudiantScheduleCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/etatEtudiantSchedule/';
    }
}
