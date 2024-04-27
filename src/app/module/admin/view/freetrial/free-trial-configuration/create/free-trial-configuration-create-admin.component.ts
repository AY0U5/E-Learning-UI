import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FreeTrialConfigurationAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialConfigurationAdmin.service';
import {FreeTrialConfigurationDto} from 'src/app/shared/model/freetrial/FreeTrialConfiguration.model';
import {FreeTrialConfigurationCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialConfigurationCriteria.model';
@Component({
  selector: 'app-free-trial-configuration-create-admin',
  templateUrl: './free-trial-configuration-create-admin.component.html'
})
export class FreeTrialConfigurationCreateAdminComponent extends AbstractCreateController<FreeTrialConfigurationDto, FreeTrialConfigurationCriteria, FreeTrialConfigurationAdminService>  implements OnInit {




    constructor( private freeTrialConfigurationService: FreeTrialConfigurationAdminService ) {
        super(freeTrialConfigurationService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
