import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialDetailAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialDetailAdmin.service';
import {FreeTrialDetailDto} from 'src/app/shared/model/freetrial/FreeTrialDetail.model';
import {FreeTrialDetailCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialDetailCriteria.model';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {FreeTrialDto} from 'src/app/shared/model/freetrial/FreeTrial.model';
import {FreeTrialAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialAdmin.service';
@Component({
  selector: 'app-free-trial-detail-view-admin',
  templateUrl: './free-trial-detail-view-admin.component.html'
})
export class FreeTrialDetailViewAdminComponent extends AbstractViewController<FreeTrialDetailDto, FreeTrialDetailCriteria, FreeTrialDetailAdminService> implements OnInit {


    constructor(private freeTrialDetailService: FreeTrialDetailAdminService, private etudiantService: EtudiantAdminService, private freeTrialService: FreeTrialAdminService){
        super(freeTrialDetailService);
    }

    ngOnInit(): void {
    }


    get freeTrial(): FreeTrialDto {
       return this.freeTrialService.item;
    }
    set freeTrial(value: FreeTrialDto) {
        this.freeTrialService.item = value;
    }
    get freeTrials(): Array<FreeTrialDto> {
       return this.freeTrialService.items;
    }
    set freeTrials(value: Array<FreeTrialDto>) {
        this.freeTrialService.items = value;
    }
    get etudiant(): EtudiantDto {
       return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants(): Array<EtudiantDto> {
       return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
    }


}
