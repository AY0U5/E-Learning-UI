import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EtatEtudiantScheduleAdminService} from 'src/app/shared/service/admin/inscriptionref/EtatEtudiantScheduleAdmin.service';
import {EtatEtudiantScheduleDto} from 'src/app/shared/model/inscriptionref/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleCriteria} from 'src/app/shared/criteria/inscriptionref/EtatEtudiantScheduleCriteria.model';

@Component({
  selector: 'app-etat-etudiant-schedule-view-admin',
  templateUrl: './etat-etudiant-schedule-view-admin.component.html'
})
export class EtatEtudiantScheduleViewAdminComponent extends AbstractViewController<EtatEtudiantScheduleDto, EtatEtudiantScheduleCriteria, EtatEtudiantScheduleAdminService> implements OnInit {


    constructor(private etatEtudiantScheduleService: EtatEtudiantScheduleAdminService){
        super(etatEtudiantScheduleService);
    }

    ngOnInit(): void {
    }




}
