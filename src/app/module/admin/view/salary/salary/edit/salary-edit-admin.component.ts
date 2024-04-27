import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {SalaryAdminService} from 'src/app/shared/service/admin/salary/SalaryAdmin.service';
import {SalaryDto} from 'src/app/shared/model/salary/Salary.model';
import {SalaryCriteria} from 'src/app/shared/criteria/salary/SalaryCriteria.model';


import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';

@Component({
  selector: 'app-salary-edit-admin',
  templateUrl: './salary-edit-admin.component.html'
})
export class SalaryEditAdminComponent extends AbstractEditController<SalaryDto, SalaryCriteria, SalaryAdminService>   implements OnInit {


    private _validSalaryCode = true;

    private _validProfRef = true;



    constructor( private salaryService: SalaryAdminService , private profService: ProfAdminService) {
        super(salaryService);
    }

    ngOnInit(): void {
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
    }


    public override setValidation(value: boolean){
        this.validSalaryCode = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSalaryCode();
    }
    public validateSalaryCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validSalaryCode = false;
        } else {
            this.validSalaryCode = true;
        }
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
   get createProfDialog(): boolean {
       return this.profService.createDialog;
   }
  set createProfDialog(value: boolean) {
       this.profService.createDialog= value;
   }


    get validSalaryCode(): boolean {
        return this._validSalaryCode;
    }
    set validSalaryCode(value: boolean) {
        this._validSalaryCode = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
}
