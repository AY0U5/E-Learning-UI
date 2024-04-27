import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {InviteStudentDto} from 'src/app/shared/model/inscriptionref/InviteStudent.model';
import {InviteStudentCriteria} from 'src/app/shared/criteria/inscriptionref/InviteStudentCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class InviteStudentAdminService extends AbstractService<InviteStudentDto, InviteStudentCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): InviteStudentDto {
        return new InviteStudentDto();
    }

    public constrcutCriteria(): InviteStudentCriteria {
        return new InviteStudentCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/inviteStudent/';
    }
}
