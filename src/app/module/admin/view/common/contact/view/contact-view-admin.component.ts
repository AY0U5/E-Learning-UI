import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ContactAdminService} from 'src/app/shared/service/admin/common/ContactAdmin.service';
import {ContactDto} from 'src/app/shared/model/common/Contact.model';
import {ContactCriteria} from 'src/app/shared/criteria/common/ContactCriteria.model';

@Component({
  selector: 'app-contact-view-admin',
  templateUrl: './contact-view-admin.component.html'
})
export class ContactViewAdminComponent extends AbstractViewController<ContactDto, ContactCriteria, ContactAdminService> implements OnInit {


    constructor(private contactService: ContactAdminService){
        super(contactService);
    }

    ngOnInit(): void {
    }




}
