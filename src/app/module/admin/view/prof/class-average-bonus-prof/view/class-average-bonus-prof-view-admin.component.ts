import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ClassAverageBonusProfAdminService} from 'src/app/shared/service/admin/prof/ClassAverageBonusProfAdmin.service';
import {ClassAverageBonusProfDto} from 'src/app/shared/model/prof/ClassAverageBonusProf.model';
import {ClassAverageBonusProfCriteria} from 'src/app/shared/criteria/prof/ClassAverageBonusProfCriteria.model';

import {SalaryDto} from 'src/app/shared/model/salary/Salary.model';
import {SalaryAdminService} from 'src/app/shared/service/admin/salary/SalaryAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-class-average-bonus-prof-view-admin',
  templateUrl: './class-average-bonus-prof-view-admin.component.html'
})
export class ClassAverageBonusProfViewAdminComponent extends AbstractViewController<ClassAverageBonusProfDto, ClassAverageBonusProfCriteria, ClassAverageBonusProfAdminService> implements OnInit {


    constructor(private classAverageBonusProfService: ClassAverageBonusProfAdminService, private salaryService: SalaryAdminService, private profService: ProfAdminService){
        super(classAverageBonusProfService);
    }

    ngOnInit(): void {
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
