import {Component, OnInit} from '@angular/core';
import {WorkloadBonusAdminService} from 'src/app/shared/service/admin/salary/WorkloadBonusAdmin.service';
import {WorkloadBonusDto} from 'src/app/shared/model/salary/WorkloadBonus.model';
import {WorkloadBonusCriteria} from 'src/app/shared/criteria/salary/WorkloadBonusCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-workload-bonus-list-admin',
  templateUrl: './workload-bonus-list-admin.component.html'
})
export class WorkloadBonusListAdminComponent extends AbstractListController<WorkloadBonusDto, WorkloadBonusCriteria, WorkloadBonusAdminService>  implements OnInit {

    override fileName = 'WorkloadBonus';




    constructor( private workloadBonusService: WorkloadBonusAdminService  ) {
        super(workloadBonusService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('WorkloadBonus').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'nombreSession', header: 'Nombre session'},
            {field: 'prix', header: 'Prix'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Nombre session': e.nombreSession ,
                 'Prix': e.prix ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Nombre session Min': this.criteria.nombreSessionMin ? this.criteria.nombreSessionMin : environment.emptyForExport ,
            'Nombre session Max': this.criteria.nombreSessionMax ? this.criteria.nombreSessionMax : environment.emptyForExport ,
            'Prix Min': this.criteria.prixMin ? this.criteria.prixMin : environment.emptyForExport ,
            'Prix Max': this.criteria.prixMax ? this.criteria.prixMax : environment.emptyForExport ,
        }];
      }
}
