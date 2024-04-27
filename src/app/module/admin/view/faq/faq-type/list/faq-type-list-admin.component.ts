import {Component, OnInit} from '@angular/core';
import {FaqTypeAdminService} from 'src/app/shared/service/admin/faq/FaqTypeAdmin.service';
import {FaqTypeDto} from 'src/app/shared/model/faq/FaqType.model';
import {FaqTypeCriteria} from 'src/app/shared/criteria/faq/FaqTypeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-faq-type-list-admin',
  templateUrl: './faq-type-list-admin.component.html'
})
export class FaqTypeListAdminComponent extends AbstractListController<FaqTypeDto, FaqTypeCriteria, FaqTypeAdminService>  implements OnInit {

    override fileName = 'FaqType';




    constructor( private faqTypeService: FaqTypeAdminService  ) {
        super(faqTypeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('FaqType').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Destinataire': e.destinataire ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Destinataire': this.criteria.destinataire ? this.criteria.destinataire : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
