import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {SuperCategorieSectionDto} from 'src/app/shared/model/courseref/SuperCategorieSection.model';
import {SuperCategorieSectionCriteria} from 'src/app/shared/criteria/courseref/SuperCategorieSectionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class SuperCategorieSectionAdminService extends AbstractService<SuperCategorieSectionDto, SuperCategorieSectionCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): SuperCategorieSectionDto {
        return new SuperCategorieSectionDto();
    }

    public constrcutCriteria(): SuperCategorieSectionCriteria {
        return new SuperCategorieSectionCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/superCategorieSection/';
    }
}
