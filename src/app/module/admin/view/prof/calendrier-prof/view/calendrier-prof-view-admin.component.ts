import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CalendrierProfAdminService} from 'src/app/shared/service/admin/prof/CalendrierProfAdmin.service';
import {CalendrierProfDto} from 'src/app/shared/model/prof/CalendrierProf.model';
import {CalendrierProfCriteria} from 'src/app/shared/criteria/prof/CalendrierProfCriteria.model';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-calendrier-prof-view-admin',
  templateUrl: './calendrier-prof-view-admin.component.html'
})
export class CalendrierProfViewAdminComponent extends AbstractViewController<CalendrierProfDto, CalendrierProfCriteria, CalendrierProfAdminService> implements OnInit {


    constructor(private calendrierProfService: CalendrierProfAdminService, private etudiantService: EtudiantAdminService, private profService: ProfAdminService){
        super(calendrierProfService);
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
