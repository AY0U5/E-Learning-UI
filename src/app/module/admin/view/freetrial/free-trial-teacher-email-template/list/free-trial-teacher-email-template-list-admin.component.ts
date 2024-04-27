import {Component, OnInit} from '@angular/core';
import {FreeTrialTeacherEmailTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialTeacherEmailTemplateAdmin.service';
import {FreeTrialTeacherEmailTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialTeacherEmailTemplateCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-free-trial-teacher-email-template-list-admin',
  templateUrl: './free-trial-teacher-email-template-list-admin.component.html'
})
export class FreeTrialTeacherEmailTemplateListAdminComponent extends AbstractListController<FreeTrialTeacherEmailTemplateDto, FreeTrialTeacherEmailTemplateCriteria, FreeTrialTeacherEmailTemplateAdminService>  implements OnInit {

    override fileName = 'FreeTrialTeacherEmailTemplate';




    constructor( private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateAdminService  ) {
        super(freeTrialTeacherEmailTemplateService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('FreeTrialTeacherEmailTemplate').subscribe(() => {
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
