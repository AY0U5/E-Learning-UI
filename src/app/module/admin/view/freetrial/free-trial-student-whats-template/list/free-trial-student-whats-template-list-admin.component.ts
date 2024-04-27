import {Component, OnInit} from '@angular/core';
import {FreeTrialStudentWhatsTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialStudentWhatsTemplateAdmin.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialStudentWhatsTemplateCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-free-trial-student-whats-template-list-admin',
  templateUrl: './free-trial-student-whats-template-list-admin.component.html'
})
export class FreeTrialStudentWhatsTemplateListAdminComponent extends AbstractListController<FreeTrialStudentWhatsTemplateDto, FreeTrialStudentWhatsTemplateCriteria, FreeTrialStudentWhatsTemplateAdminService>  implements OnInit {

    override fileName = 'FreeTrialStudentWhatsTemplate';




    constructor( private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateAdminService  ) {
        super(freeTrialStudentWhatsTemplateService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('FreeTrialStudentWhatsTemplate').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'object', header: 'Object'},
            {field: 'source', header: 'Source'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Object': e.object ,
                 'Corps': e.corps ,
                 'Source': e.source ,
            }
        });

        this.criteriaData = [{
            'Object': this.criteria.object ? this.criteria.object : environment.emptyForExport ,
            'Corps': this.criteria.corps ? this.criteria.corps : environment.emptyForExport ,
            'Source': this.criteria.source ? this.criteria.source : environment.emptyForExport ,
        }];
      }
}
