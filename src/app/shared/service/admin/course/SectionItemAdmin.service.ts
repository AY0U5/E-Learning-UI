import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {SectionItemDto} from 'src/app/shared/model/course/SectionItem.model';
import {SectionItemCriteria} from 'src/app/shared/criteria/course/SectionItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class SectionItemAdminService extends AbstractService<SectionItemDto, SectionItemCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): SectionItemDto {
        return new SectionItemDto();
    }

    public constrcutCriteria(): SectionItemCriteria {
        return new SectionItemCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/sectionItem/';
    }
}
