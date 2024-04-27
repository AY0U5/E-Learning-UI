import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {HomeWorkEtudiantDto} from 'src/app/shared/model/homework/HomeWorkEtudiant.model';
import {HomeWorkEtudiantCriteria} from 'src/app/shared/criteria/homework/HomeWorkEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class HomeWorkEtudiantAdminService extends AbstractService<HomeWorkEtudiantDto, HomeWorkEtudiantCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): HomeWorkEtudiantDto {
        return new HomeWorkEtudiantDto();
    }

    public constrcutCriteria(): HomeWorkEtudiantCriteria {
        return new HomeWorkEtudiantCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/homeWorkEtudiant/';
    }
}
