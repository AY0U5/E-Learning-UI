import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ContactAdminService} from 'src/app/shared/service/admin/common/ContactAdmin.service';
import {ContactDto} from 'src/app/shared/model/common/Contact.model';
import {ContactCriteria} from 'src/app/shared/criteria/common/ContactCriteria.model';
@Component({
  selector: 'app-contact-create-admin',
  templateUrl: './contact-create-admin.component.html'
})
export class ContactCreateAdminComponent extends AbstractCreateController<ContactDto, ContactCriteria, ContactAdminService>  implements OnInit {




    constructor( private contactService: ContactAdminService ) {
        super(contactService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
