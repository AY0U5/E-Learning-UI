import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TrancheHoraireProfAdminService} from 'src/app/shared/service/admin/prof/TrancheHoraireProfAdmin.service';
import {TrancheHoraireProfDto} from 'src/app/shared/model/prof/TrancheHoraireProf.model';
import {TrancheHoraireProfCriteria} from 'src/app/shared/criteria/prof/TrancheHoraireProfCriteria.model';

import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-tranche-horaire-prof-view-admin',
  templateUrl: './tranche-horaire-prof-view-admin.component.html'
})
export class TrancheHoraireProfViewAdminComponent extends AbstractViewController<TrancheHoraireProfDto, TrancheHoraireProfCriteria, TrancheHoraireProfAdminService> implements OnInit {


    constructor(private trancheHoraireProfService: TrancheHoraireProfAdminService, private profService: ProfAdminService){
        super(trancheHoraireProfService);
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


}
