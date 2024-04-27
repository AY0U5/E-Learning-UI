import {Component, OnInit} from '@angular/core';
import {ClassAverageBonusProfAdminService} from 'src/app/shared/service/admin/prof/ClassAverageBonusProfAdmin.service';
import {ClassAverageBonusProfDto} from 'src/app/shared/model/prof/ClassAverageBonusProf.model';
import {ClassAverageBonusProfCriteria} from 'src/app/shared/criteria/prof/ClassAverageBonusProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {SalaryDto} from 'src/app/shared/model/salary/Salary.model';
import {SalaryAdminService} from 'src/app/shared/service/admin/salary/SalaryAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';


@Component({
  selector: 'app-class-average-bonus-prof-list-admin',
  templateUrl: './class-average-bonus-prof-list-admin.component.html'
})
export class ClassAverageBonusProfListAdminComponent extends AbstractListController<ClassAverageBonusProfDto, ClassAverageBonusProfCriteria, ClassAverageBonusProfAdminService>  implements OnInit {

    override fileName = 'ClassAverageBonusProf';


    profs: Array<ProfDto>;
    salarys: Array<SalaryDto>;


    constructor( private classAverageBonusProfService: ClassAverageBonusProfAdminService  , private salaryService: SalaryAdminService, private profService: ProfAdminService) {
        super(classAverageBonusProfService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('ClassAverageBonusProf').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadProf();
                this.loadSalary();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'mois', header: 'Mois'},
            {field: 'annee', header: 'Annee'},
            {field: 'salary?.code', header: 'Salary'},
        ];
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
                'Prof': e.prof?.ref ,
                 'Mois': e.mois ,
                 'Annee': e.annee ,
                'Salary': e.salary?.code ,
            }
        });

        this.criteriaData = [{
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
            'Mois Min': this.criteria.moisMin ? this.criteria.moisMin : environment.emptyForExport ,
            'Mois Max': this.criteria.moisMax ? this.criteria.moisMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
        //'Salary': this.criteria.salary?.code ? this.criteria.salary?.code : environment.emptyForExport ,
        }];
      }
}
