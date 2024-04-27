import {Component, OnInit} from '@angular/core';
import {ContactAdminService} from 'src/app/shared/service/admin/common/ContactAdmin.service';
import {ContactDto} from 'src/app/shared/model/common/Contact.model';
import {ContactCriteria} from 'src/app/shared/criteria/common/ContactCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-contact-list-admin',
  templateUrl: './contact-list-admin.component.html'
})
export class ContactListAdminComponent extends AbstractListController<ContactDto, ContactCriteria, ContactAdminService>  implements OnInit {

    override fileName = 'Contact';


     yesOrNoReplied: any[] = [];


    constructor( private contactService: ContactAdminService  ) {
        super(contactService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Contact').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.yesOrNoReplied =  [{label: 'Replied', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'name', header: 'Name'},
            {field: 'email', header: 'Email'},
            {field: 'phone', header: 'Phone'},
            {field: 'setFrom', header: 'Set from'},
            {field: 'dateContact', header: 'Date contact'},
            {field: 'replied', header: 'Replied'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Name': e.name ,
                 'Email': e.email ,
                 'Phone': e.phone ,
                 'Set from': e.setFrom ,
                'Date contact': this.datePipe.transform(e.dateContact , 'dd/MM/yyyy hh:mm'),
                'Replied': e.replied? 'Vrai' : 'Faux' ,
                 'Message': e.message ,
            }
        });

        this.criteriaData = [{
            'Name': this.criteria.name ? this.criteria.name : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Phone': this.criteria.phone ? this.criteria.phone : environment.emptyForExport ,
            'Set from': this.criteria.setFrom ? this.criteria.setFrom : environment.emptyForExport ,
            'Date contact Min': this.criteria.dateContactFrom ? this.datePipe.transform(this.criteria.dateContactFrom , this.dateFormat) : environment.emptyForExport ,
            'Date contact Max': this.criteria.dateContactTo ? this.datePipe.transform(this.criteria.dateContactTo , this.dateFormat) : environment.emptyForExport ,
            'Replied': this.criteria.replied ? (this.criteria.replied ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Message': this.criteria.message ? this.criteria.message : environment.emptyForExport ,
        }];
      }
}
