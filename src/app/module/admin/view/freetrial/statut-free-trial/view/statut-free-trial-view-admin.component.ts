import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {StatutFreeTrialAdminService} from 'src/app/shared/service/admin/freetrial/StatutFreeTrialAdmin.service';
import {StatutFreeTrialDto} from 'src/app/shared/model/freetrial/StatutFreeTrial.model';
import {StatutFreeTrialCriteria} from 'src/app/shared/criteria/freetrial/StatutFreeTrialCriteria.model';

@Component({
  selector: 'app-statut-free-trial-view-admin',
  templateUrl: './statut-free-trial-view-admin.component.html'
})
export class StatutFreeTrialViewAdminComponent extends AbstractViewController<StatutFreeTrialDto, StatutFreeTrialCriteria, StatutFreeTrialAdminService> implements OnInit {


    constructor(private statutFreeTrialService: StatutFreeTrialAdminService){
        super(statutFreeTrialService);
    }

    ngOnInit(): void {
    }




}
