import {Component, OnInit} from '@angular/core';
import {FreeTrialStudentEmailTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialStudentEmailTemplateAdmin.service';
import {FreeTrialStudentEmailTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialStudentEmailTemplateCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-free-trial-student-email-template-list-admin',
  templateUrl: './free-trial-student-email-template-list-admin.component.html'
})
export class FreeTrialStudentEmailTemplateListAdminComponent extends AbstractListController<FreeTrialStudentEmailTemplateDto, FreeTrialStudentEmailTemplateCriteria, FreeTrialStudentEmailTemplateAdminService>  implements OnInit {

    override fileName = 'FreeTrialStudentEmailTemplate';




    constructor( private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateAdminService  ) {
        super(freeTrialStudentEmailTemplateService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('FreeTrialStudentEmailTemplate').subscribe(() => {
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
