import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {FaqEtudiantDto} from 'src/app/shared/model/faq/FaqEtudiant.model';
import {FaqEtudiantCriteria} from 'src/app/shared/criteria/faq/FaqEtudiantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FaqEtudiantAdminService extends AbstractService<FaqEtudiantDto, FaqEtudiantCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): FaqEtudiantDto {
        return new FaqEtudiantDto();
    }

    public constrcutCriteria(): FaqEtudiantCriteria {
        return new FaqEtudiantCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/faqEtudiant/';
    }
}
