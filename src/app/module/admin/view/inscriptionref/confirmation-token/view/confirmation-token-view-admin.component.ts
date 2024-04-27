import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ConfirmationTokenAdminService} from 'src/app/shared/service/admin/inscriptionref/ConfirmationTokenAdmin.service';
import {ConfirmationTokenDto} from 'src/app/shared/model/inscriptionref/ConfirmationToken.model';
import {ConfirmationTokenCriteria} from 'src/app/shared/criteria/inscriptionref/ConfirmationTokenCriteria.model';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
@Component({
  selector: 'app-confirmation-token-view-admin',
  templateUrl: './confirmation-token-view-admin.component.html'
})
export class ConfirmationTokenViewAdminComponent extends AbstractViewController<ConfirmationTokenDto, ConfirmationTokenCriteria, ConfirmationTokenAdminService> implements OnInit {


    constructor(private confirmationTokenService: ConfirmationTokenAdminService, private etudiantService: EtudiantAdminService){
        super(confirmationTokenService);
    }

    ngOnInit(): void {
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
