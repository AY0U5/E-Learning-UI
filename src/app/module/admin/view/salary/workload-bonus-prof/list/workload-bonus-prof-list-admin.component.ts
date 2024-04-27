import {Component, OnInit} from '@angular/core';
import {WorkloadBonusProfAdminService} from 'src/app/shared/service/admin/salary/WorkloadBonusProfAdmin.service';
import {WorkloadBonusProfDto} from 'src/app/shared/model/salary/WorkloadBonusProf.model';
import {WorkloadBonusProfCriteria} from 'src/app/shared/criteria/salary/WorkloadBonusProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {SalaryDto} from 'src/app/shared/model/salary/Salary.model';
import {SalaryAdminService} from 'src/app/shared/service/admin/salary/SalaryAdmin.service';
import {WorkloadBonusDto} from 'src/app/shared/model/salary/WorkloadBonus.model';
import {WorkloadBonusAdminService} from 'src/app/shared/service/admin/salary/WorkloadBonusAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';


@Component({
  selector: 'app-workload-bonus-prof-list-admin',
  templateUrl: './workload-bonus-prof-list-admin.component.html'
})
export class WorkloadBonusProfListAdminComponent extends AbstractListController<WorkloadBonusProfDto, WorkloadBonusProfCriteria, WorkloadBonusProfAdminService>  implements OnInit {

    override fileName = 'WorkloadBonusProf';


    workloadBonuss: Array<WorkloadBonusDto>;
    profs: Array<ProfDto>;
    salarys: Array<SalaryDto>;


    constructor( private workloadBonusProfService: WorkloadBonusProfAdminService  , private salaryService: SalaryAdminService, private workloadBonusService: WorkloadBonusAdminService, private profService: ProfAdminService) {
        super(workloadBonusProfService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('WorkloadBonusProf').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadWorkloadBonus();
                this.loadProf();
                this.loadSalary();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'workloadBonus?.code', header: 'Workload bonus'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'mois', header: 'Mois'},
            {field: 'annee', header: 'Annee'},
            {field: 'salary?.code', header: 'Salary'},
        ];
    }


    public async loadWorkloadBonus(){
       this.workloadBonusService.findAllOptimized().subscribe(workloadBonuss => this.workloadBonuss = workloadBonuss, error => console.log(error))
    }
    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }
    public async loadSalary(){
       this.salaryService.findAllOptimized().subscribe(salarys => this.salarys = salarys, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Workload bonus': e.workloadBonus?.code ,
                'Prof': e.prof?.ref ,
                 'Mois': e.mois ,
                 'Annee': e.annee ,
                'Salary': e.salary?.code ,
            }
        });

        this.criteriaData = [{
        //'Workload bonus': this.criteria.workloadBonus?.code ? this.criteria.workloadBonus?.code : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
            'Mois Min': this.criteria.moisMin ? this.criteria.moisMin : environment.emptyForExport ,
            'Mois Max': this.criteria.moisMax ? this.criteria.moisMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
        //'Salary': this.criteria.salary?.code ? this.criteria.salary?.code : environment.emptyForExport ,
        }];
      }
}
