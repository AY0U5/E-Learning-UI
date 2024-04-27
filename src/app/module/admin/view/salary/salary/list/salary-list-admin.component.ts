import {Component, OnInit} from '@angular/core';
import {SalaryAdminService} from 'src/app/shared/service/admin/salary/SalaryAdmin.service';
import {SalaryDto} from 'src/app/shared/model/salary/Salary.model';
import {SalaryCriteria} from 'src/app/shared/criteria/salary/SalaryCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';


@Component({
  selector: 'app-salary-list-admin',
  templateUrl: './salary-list-admin.component.html'
})
export class SalaryListAdminComponent extends AbstractListController<SalaryDto, SalaryCriteria, SalaryAdminService>  implements OnInit {

    override fileName = 'Salary';


     yesOrNoPayer: any[] = [];
    profs: Array<ProfDto>;


    constructor( private salaryService: SalaryAdminService  , private profService: ProfAdminService) {
        super(salaryService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Salary').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadProf();
                this.yesOrNoPayer =  [{label: 'Payer', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'mois', header: 'Mois'},
            {field: 'annee', header: 'Annee'},
            {field: 'nbrSessionMensuel', header: 'Nbr session mensuel'},
            {field: 'payer', header: 'Payer'},
            {field: 'totalPayment', header: 'Total payment'},
            {field: 'totalBonusClassAverage', header: 'Total bonus class average'},
            {field: 'totalBonusWorkload', header: 'Total bonus workload'},
        ];
    }


    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                'Prof': e.prof?.ref ,
                 'Mois': e.mois ,
                 'Annee': e.annee ,
                 'Nbr session mensuel': e.nbrSessionMensuel ,
                'Payer': e.payer? 'Vrai' : 'Faux' ,
                 'Total payment': e.totalPayment ,
                 'Total bonus class average': e.totalBonusClassAverage ,
                 'Total bonus workload': e.totalBonusWorkload ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
            'Mois Min': this.criteria.moisMin ? this.criteria.moisMin : environment.emptyForExport ,
            'Mois Max': this.criteria.moisMax ? this.criteria.moisMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
            'Nbr session mensuel Min': this.criteria.nbrSessionMensuelMin ? this.criteria.nbrSessionMensuelMin : environment.emptyForExport ,
            'Nbr session mensuel Max': this.criteria.nbrSessionMensuelMax ? this.criteria.nbrSessionMensuelMax : environment.emptyForExport ,
            'Payer': this.criteria.payer ? (this.criteria.payer ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Total payment Min': this.criteria.totalPaymentMin ? this.criteria.totalPaymentMin : environment.emptyForExport ,
            'Total payment Max': this.criteria.totalPaymentMax ? this.criteria.totalPaymentMax : environment.emptyForExport ,
            'Total bonus class average Min': this.criteria.totalBonusClassAverageMin ? this.criteria.totalBonusClassAverageMin : environment.emptyForExport ,
            'Total bonus class average Max': this.criteria.totalBonusClassAverageMax ? this.criteria.totalBonusClassAverageMax : environment.emptyForExport ,
            'Total bonus workload Min': this.criteria.totalBonusWorkloadMin ? this.criteria.totalBonusWorkloadMin : environment.emptyForExport ,
            'Total bonus workload Max': this.criteria.totalBonusWorkloadMax ? this.criteria.totalBonusWorkloadMax : environment.emptyForExport ,
        }];
      }
}
