import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ClassRoomDto} from 'src/app/shared/model/classroom/ClassRoom.model';
import {ClassRoomCriteria} from 'src/app/shared/criteria/classroom/ClassRoomCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ClassRoomAdminService extends AbstractService<ClassRoomDto, ClassRoomCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ClassRoomDto {
        return new ClassRoomDto();
    }

    public constrcutCriteria(): ClassRoomCriteria {
        return new ClassRoomCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/classRoom/';
    }
}
