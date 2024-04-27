import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FreeTrialConfigurationAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialConfigurationAdmin.service';
import {FreeTrialConfigurationDto} from 'src/app/shared/model/freetrial/FreeTrialConfiguration.model';
import {FreeTrialConfigurationCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialConfigurationCriteria.model';



@Component({
  selector: 'app-free-trial-configuration-edit-admin',
  templateUrl: './free-trial-configuration-edit-admin.component.html'
})
export class FreeTrialConfigurationEditAdminComponent extends AbstractEditController<FreeTrialConfigurationDto, FreeTrialConfigurationCriteria, FreeTrialConfigurationAdminService>   implements OnInit {






    constructor( private freeTrialConfigurationService: FreeTrialConfigurationAdminService ) {
        super(freeTrialConfigurationService);
    }

    ngOnInit(): void {
    }
    public override prepareEdit() {
        this.item.dateApplicationDebut = this.freeTrialConfigurationService.format(this.item.dateApplicationDebut);
        this.item.dateApplicationFin = this.freeTrialConfigurationService.format(this.item.dateApplicationFin);
    }



    public override setValidation(value: boolean){
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
