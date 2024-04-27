import {Component, OnInit} from '@angular/core';
import {FaqAdminService} from 'src/app/shared/service/admin/faq/FaqAdmin.service';
import {FaqDto} from 'src/app/shared/model/faq/Faq.model';
import {FaqCriteria} from 'src/app/shared/criteria/faq/FaqCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {FaqTypeDto} from 'src/app/shared/model/faq/FaqType.model';
import {FaqTypeAdminService} from 'src/app/shared/service/admin/faq/FaqTypeAdmin.service';


@Component({
  selector: 'app-faq-list-admin',
  templateUrl: './faq-list-admin.component.html'
})
export class FaqListAdminComponent extends AbstractListController<FaqDto, FaqCriteria, FaqAdminService>  implements OnInit {

    override fileName = 'Faq';


    faqTypes: Array<FaqTypeDto>;


    constructor( private faqService: FaqAdminService  , private faqTypeService: FaqTypeAdminService) {
        super(faqService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Faq').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadFaqType();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'faqType?.libelle', header: 'Faq type'},
        ];
    }


    public async loadFaqType(){
       this.faqTypeService.findAllOptimized().subscribe(faqTypes => this.faqTypes = faqTypes, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Description': e.description ,
                 'Libelle': e.libelle ,
                'Faq type': e.faqType?.libelle ,
            }
        });

        this.criteriaData = [{
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Faq type': this.criteria.faqType?.libelle ? this.criteria.faqType?.libelle : environment.emptyForExport ,
        }];
      }
}
