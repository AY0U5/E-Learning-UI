import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {LevelTestConfigurationDto} from 'src/app/shared/model/courseref/LevelTestConfiguration.model';
import {LevelTestConfigurationCriteria} from 'src/app/shared/criteria/courseref/LevelTestConfigurationCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class LevelTestConfigurationAdminService extends AbstractService<LevelTestConfigurationDto, LevelTestConfigurationCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): LevelTestConfigurationDto {
        return new LevelTestConfigurationDto();
    }

    public constrcutCriteria(): LevelTestConfigurationCriteria {
        return new LevelTestConfigurationCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/levelTestConfiguration/';
    }
}
