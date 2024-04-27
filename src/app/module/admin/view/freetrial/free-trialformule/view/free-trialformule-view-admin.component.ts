import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialformuleAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialformuleAdmin.service';
import {FreeTrialformuleDto} from 'src/app/shared/model/freetrial/FreeTrialformule.model';
import {FreeTrialformuleCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialformuleCriteria.model';

import {InscriptionDto} from 'src/app/shared/model/grpe/Inscription.model';
import {InscriptionAdminService} from 'src/app/shared/service/admin/grpe/InscriptionAdmin.service';
@Component({
  selector: 'app-free-trialformule-view-admin',
  templateUrl: './free-trialformule-view-admin.component.html'
})
export class FreeTrialformuleViewAdminComponent extends AbstractViewController<FreeTrialformuleDto, FreeTrialformuleCriteria, FreeTrialformuleAdminService> implements OnInit {


    constructor(private freeTrialformuleService: FreeTrialformuleAdminService, private inscriptionService: InscriptionAdminService){
        super(freeTrialformuleService);
    }

    ngOnInit(): void {
    }


    get inscription(): InscriptionDto {
       return this.inscriptionService.item;
    }
    set inscription(value: InscriptionDto) {
        this.inscriptionService.item = value;
    }
    get inscriptions(): Array<InscriptionDto> {
       return this.inscriptionService.items;
    }
    set inscriptions(value: Array<InscriptionDto>) {
        this.inscriptionService.items = value;
    }


}
