import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {CategorieProfDto} from 'src/app/shared/model/prof/CategorieProf.model';
import {CategorieProfCriteria} from 'src/app/shared/criteria/prof/CategorieProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class CategorieProfAdminService extends AbstractService<CategorieProfDto, CategorieProfCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): CategorieProfDto {
        return new CategorieProfDto();
    }

    public constrcutCriteria(): CategorieProfCriteria {
        return new CategorieProfCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/categorieProf/';
    }
}
