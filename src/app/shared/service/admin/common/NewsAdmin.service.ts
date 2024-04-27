import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {NewsDto} from 'src/app/shared/model/common/News.model';
import {NewsCriteria} from 'src/app/shared/criteria/common/NewsCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class NewsAdminService extends AbstractService<NewsDto, NewsCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): NewsDto {
        return new NewsDto();
    }

    public constrcutCriteria(): NewsCriteria {
        return new NewsCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/news/';
    }
}
