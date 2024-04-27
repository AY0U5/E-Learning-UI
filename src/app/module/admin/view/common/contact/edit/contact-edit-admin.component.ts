import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ContactAdminService} from 'src/app/shared/service/admin/common/ContactAdmin.service';
import {ContactDto} from 'src/app/shared/model/common/Contact.model';
import {ContactCriteria} from 'src/app/shared/criteria/common/ContactCriteria.model';



@Component({
  selector: 'app-contact-edit-admin',
  templateUrl: './contact-edit-admin.component.html'
})
export class ContactEditAdminComponent extends AbstractEditController<ContactDto, ContactCriteria, ContactAdminService>   implements OnInit {






    constructor( private contactService: ContactAdminService ) {
        super(contactService);
    }

    ngOnInit(): void {
    }
    public override prepareEdit() {
        this.item.dateContact = this.contactService.format(this.item.dateContact);
    }



    public override setValidation(value: boolean){
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
