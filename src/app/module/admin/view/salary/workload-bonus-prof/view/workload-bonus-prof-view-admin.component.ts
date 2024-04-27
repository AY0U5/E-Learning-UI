import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {WorkloadBonusProfAdminService} from 'src/app/shared/service/admin/salary/WorkloadBonusProfAdmin.service';
import {WorkloadBonusProfDto} from 'src/app/shared/model/salary/WorkloadBonusProf.model';
import {WorkloadBonusProfCriteria} from 'src/app/shared/criteria/salary/WorkloadBonusProfCriteria.model';

import {SalaryDto} from 'src/app/shared/model/salary/Salary.model';
import {SalaryAdminService} from 'src/app/shared/service/admin/salary/SalaryAdmin.service';
import {WorkloadBonusDto} from 'src/app/shared/model/salary/WorkloadBonus.model';
import {WorkloadBonusAdminService} from 'src/app/shared/service/admin/salary/WorkloadBonusAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-workload-bonus-prof-view-admin',
  templateUrl: './workload-bonus-prof-view-admin.component.html'
})
export class WorkloadBonusProfViewAdminComponent extends AbstractViewController<WorkloadBonusProfDto, WorkloadBonusProfCriteria, WorkloadBonusProfAdminService> implements OnInit {


    constructor(private workloadBonusProfService: WorkloadBonusProfAdminService, private salaryService: SalaryAdminService, private workloadBonusService: WorkloadBonusAdminService, private profService: ProfAdminService){
        super(workloadBonusProfService);
    }

    ngOnInit(): void {
    }


    get workloadBonus(): WorkloadBonusDto {
       return this.workloadBonusService.item;
    }
    set workloadBonus(value: WorkloadBonusDto) {
        this.workloadBonusService.item = value;
    }
    get workloadBonuss(): Array<WorkloadBonusDto> {
       return this.workloadBonusService.items;
    }
    set workloadBonuss(value: Array<WorkloadBonusDto>) {
        this.workloadBonusService.items = value;
    }
    get prof(): ProfDto {
       return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs(): Array<ProfDto> {
       return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get salary(): SalaryDto {
       return this.salaryService.item;
    }
    set salary(value: SalaryDto) {
        this.salaryService.item = value;
    }
    get salarys(): Array<SalaryDto> {
       return this.salaryService.items;
    }
    set salarys(value: Array<SalaryDto>) {
        this.salaryService.items = value;
    }


}
