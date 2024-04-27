import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {PriceDto} from 'src/app/shared/model/price/Price.model';
import {PriceCriteria} from 'src/app/shared/criteria/price/PriceCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PriceAdminService extends AbstractService<PriceDto, PriceCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): PriceDto {
        return new PriceDto();
    }

    public constrcutCriteria(): PriceCriteria {
        return new PriceCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/price/';
    }
}
