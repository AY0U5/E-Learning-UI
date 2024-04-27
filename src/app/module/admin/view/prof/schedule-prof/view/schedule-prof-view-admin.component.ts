import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ScheduleProfAdminService} from 'src/app/shared/service/admin/prof/ScheduleProfAdmin.service';
import {ScheduleProfDto} from 'src/app/shared/model/prof/ScheduleProf.model';
import {ScheduleProfCriteria} from 'src/app/shared/criteria/prof/ScheduleProfCriteria.model';

import {GroupeEtudiantDto} from 'src/app/shared/model/grpe/GroupeEtudiant.model';
import {GroupeEtudiantAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-schedule-prof-view-admin',
  templateUrl: './schedule-prof-view-admin.component.html'
})
export class ScheduleProfViewAdminComponent extends AbstractViewController<ScheduleProfDto, ScheduleProfCriteria, ScheduleProfAdminService> implements OnInit {


    constructor(private scheduleProfService: ScheduleProfAdminService, private groupeEtudiantService: GroupeEtudiantAdminService, private coursService: CoursAdminService, private profService: ProfAdminService){
        super(scheduleProfService);
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
    get groupeEtudiant(): GroupeEtudiantDto {
       return this.groupeEtudiantService.item;
    }
    set groupeEtudiant(value: GroupeEtudiantDto) {
        this.groupeEtudiantService.item = value;
    }
    get groupeEtudiants(): Array<GroupeEtudiantDto> {
       return this.groupeEtudiantService.items;
    }
    set groupeEtudiants(value: Array<GroupeEtudiantDto>) {
        this.groupeEtudiantService.items = value;
    }
    get cours(): CoursDto {
       return this.coursService.item;
    }
    set cours(value: CoursDto) {
        this.coursService.item = value;
    }
    get courss(): Array<CoursDto> {
       return this.coursService.items;
    }
    set courss(value: Array<CoursDto>) {
        this.coursService.items = value;
    }


}
