import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EtatCoursDto} from 'src/app/shared/model/courseref/EtatCours.model';
import {EtatCoursCriteria} from 'src/app/shared/criteria/courseref/EtatCoursCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtatCoursAdminService extends AbstractService<EtatCoursDto, EtatCoursCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EtatCoursDto {
        return new EtatCoursDto();
    }

    public constrcutCriteria(): EtatCoursCriteria {
        return new EtatCoursCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/etatCours/';
    }
}
