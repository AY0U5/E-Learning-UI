import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {SkillDto} from 'src/app/shared/model/inscriptionref/Skill.model';
import {SkillCriteria} from 'src/app/shared/criteria/inscriptionref/SkillCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class SkillAdminService extends AbstractService<SkillDto, SkillCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): SkillDto {
        return new SkillDto();
    }

    public constrcutCriteria(): SkillCriteria {
        return new SkillCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/skill/';
    }
}
