import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {CategorieSectionDto} from 'src/app/shared/model/courseref/CategorieSection.model';
import {CategorieSectionCriteria} from 'src/app/shared/criteria/courseref/CategorieSectionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class CategorieSectionAdminService extends AbstractService<CategorieSectionDto, CategorieSectionCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): CategorieSectionDto {
        return new CategorieSectionDto();
    }

    public constrcutCriteria(): CategorieSectionCriteria {
        return new CategorieSectionCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/categorieSection/';
    }
}
