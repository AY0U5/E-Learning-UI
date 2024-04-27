import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ContactDto} from 'src/app/shared/model/common/Contact.model';
import {ContactCriteria} from 'src/app/shared/criteria/common/ContactCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ContactAdminService extends AbstractService<ContactDto, ContactCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ContactDto {
        return new ContactDto();
    }

    public constrcutCriteria(): ContactCriteria {
        return new ContactCriteria();
    }

    get API() {
        return environment.apiUrlAlcservice + 'admin/contact/';
    }
}
