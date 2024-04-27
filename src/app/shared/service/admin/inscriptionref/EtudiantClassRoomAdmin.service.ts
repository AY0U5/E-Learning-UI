import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EtudiantClassRoomDto} from 'src/app/shared/model/inscriptionref/EtudiantClassRoom.model';
import {EtudiantClassRoomCriteria} from 'src/app/shared/criteria/inscriptionref/EtudiantClassRoomCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtudiantClassRoomAdminService extends AbstractService<EtudiantClassRoomDto, EtudiantClassRoomCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EtudiantClassRoomDto {
        return new EtudiantClassRoomDto();
    }

    public constrcutCriteria(): EtudiantClassRoomCriteria {
        return new EtudiantClassRoomCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/etudiantClassRoom/';
    }
}
