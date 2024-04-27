import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ConfirmationTokenDto} from 'src/app/shared/model/inscriptionref/ConfirmationToken.model';
import {ConfirmationTokenCriteria} from 'src/app/shared/criteria/inscriptionref/ConfirmationTokenCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ConfirmationTokenAdminService extends AbstractService<ConfirmationTokenDto, ConfirmationTokenCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ConfirmationTokenDto {
        return new ConfirmationTokenDto();
    }

    public constrcutCriteria(): ConfirmationTokenCriteria {
        return new ConfirmationTokenCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/confirmationToken/';
    }
}
