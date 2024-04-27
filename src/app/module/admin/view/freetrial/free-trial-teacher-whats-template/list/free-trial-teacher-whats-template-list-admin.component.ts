import {Component, OnInit} from '@angular/core';
import {FreeTrialTeacherWhatsTemplateAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialTeacherWhatsTemplateAdmin.service';
import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/shared/model/freetrial/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialTeacherWhatsTemplateCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-free-trial-teacher-whats-template-list-admin',
  templateUrl: './free-trial-teacher-whats-template-list-admin.component.html'
})
export class FreeTrialTeacherWhatsTemplateListAdminComponent extends AbstractListController<FreeTrialTeacherWhatsTemplateDto, FreeTrialTeacherWhatsTemplateCriteria, FreeTrialTeacherWhatsTemplateAdminService>  implements OnInit {

    override fileName = 'FreeTrialTeacherWhatsTemplate';




    constructor( private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateAdminService  ) {
        super(freeTrialTeacherWhatsTemplateService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('FreeTrialTeacherWhatsTemplate').subscribe(() => {
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
