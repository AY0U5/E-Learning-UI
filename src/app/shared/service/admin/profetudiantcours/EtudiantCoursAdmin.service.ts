import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EtudiantCoursDto} from 'src/app/shared/model/profetudiantcours/EtudiantCours.model';
import {EtudiantCoursCriteria} from 'src/app/shared/criteria/profetudiantcours/EtudiantCoursCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtudiantCoursAdminService extends AbstractService<EtudiantCoursDto, EtudiantCoursCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EtudiantCoursDto {
        return new EtudiantCoursDto();
    }

    public constrcutCriteria(): EtudiantCoursCriteria {
        return new EtudiantCoursCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/etudiantCours/';
    }
}
