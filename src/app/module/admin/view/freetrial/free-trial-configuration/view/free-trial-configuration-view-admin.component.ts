import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialConfigurationAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialConfigurationAdmin.service';
import {FreeTrialConfigurationDto} from 'src/app/shared/model/freetrial/FreeTrialConfiguration.model';
import {FreeTrialConfigurationCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialConfigurationCriteria.model';

@Component({
  selector: 'app-free-trial-configuration-view-admin',
  templateUrl: './free-trial-configuration-view-admin.component.html'
})
export class FreeTrialConfigurationViewAdminComponent extends AbstractViewController<FreeTrialConfigurationDto, FreeTrialConfigurationCriteria, FreeTrialConfigurationAdminService> implements OnInit {


    constructor(private freeTrialConfigurationService: FreeTrialConfigurationAdminService){
        super(freeTrialConfigurationService);
    }

    ngOnInit(): void {
    }




}
