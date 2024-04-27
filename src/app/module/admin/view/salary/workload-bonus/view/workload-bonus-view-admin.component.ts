import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {WorkloadBonusAdminService} from 'src/app/shared/service/admin/salary/WorkloadBonusAdmin.service';
import {WorkloadBonusDto} from 'src/app/shared/model/salary/WorkloadBonus.model';
import {WorkloadBonusCriteria} from 'src/app/shared/criteria/salary/WorkloadBonusCriteria.model';

@Component({
  selector: 'app-workload-bonus-view-admin',
  templateUrl: './workload-bonus-view-admin.component.html'
})
export class WorkloadBonusViewAdminComponent extends AbstractViewController<WorkloadBonusDto, WorkloadBonusCriteria, WorkloadBonusAdminService> implements OnInit {


    constructor(private workloadBonusService: WorkloadBonusAdminService){
        super(workloadBonusService);
    }

    ngOnInit(): void {
    }




}
