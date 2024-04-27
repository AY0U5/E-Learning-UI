import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {WorkloadBonusAdminService} from 'src/app/shared/service/admin/salary/WorkloadBonusAdmin.service';
import {WorkloadBonusDto} from 'src/app/shared/model/salary/WorkloadBonus.model';
import {WorkloadBonusCriteria} from 'src/app/shared/criteria/salary/WorkloadBonusCriteria.model';



@Component({
  selector: 'app-workload-bonus-edit-admin',
  templateUrl: './workload-bonus-edit-admin.component.html'
})
export class WorkloadBonusEditAdminComponent extends AbstractEditController<WorkloadBonusDto, WorkloadBonusCriteria, WorkloadBonusAdminService>   implements OnInit {


    private _validWorkloadBonusCode = true;




    constructor( private workloadBonusService: WorkloadBonusAdminService ) {
        super(workloadBonusService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validWorkloadBonusCode = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateWorkloadBonusCode();
    }
    public validateWorkloadBonusCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validWorkloadBonusCode = false;
        } else {
            this.validWorkloadBonusCode = true;
        }
    }






    get validWorkloadBonusCode(): boolean {
        return this._validWorkloadBonusCode;
    }
    set validWorkloadBonusCode(value: boolean) {
        this._validWorkloadBonusCode = value;
    }

}
