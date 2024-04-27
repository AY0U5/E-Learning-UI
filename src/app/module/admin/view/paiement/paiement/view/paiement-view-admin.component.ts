import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PaiementAdminService} from 'src/app/shared/service/admin/paiement/PaiementAdmin.service';
import {PaiementDto} from 'src/app/shared/model/paiement/Paiement.model';
import {PaiementCriteria} from 'src/app/shared/criteria/paiement/PaiementCriteria.model';

import {GroupeEtudiantDto} from 'src/app/shared/model/grpe/GroupeEtudiant.model';
import {GroupeEtudiantAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudiantAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-paiement-view-admin',
  templateUrl: './paiement-view-admin.component.html'
})
export class PaiementViewAdminComponent extends AbstractViewController<PaiementDto, PaiementCriteria, PaiementAdminService> implements OnInit {


    constructor(private paiementService: PaiementAdminService, private groupeEtudiantService: GroupeEtudiantAdminService, private profService: ProfAdminService){
        super(paiementService);
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


}
