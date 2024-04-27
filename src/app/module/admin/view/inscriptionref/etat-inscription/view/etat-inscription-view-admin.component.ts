import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EtatInscriptionAdminService} from 'src/app/shared/service/admin/inscriptionref/EtatInscriptionAdmin.service';
import {EtatInscriptionDto} from 'src/app/shared/model/inscriptionref/EtatInscription.model';
import {EtatInscriptionCriteria} from 'src/app/shared/criteria/inscriptionref/EtatInscriptionCriteria.model';

@Component({
  selector: 'app-etat-inscription-view-admin',
  templateUrl: './etat-inscription-view-admin.component.html'
})
export class EtatInscriptionViewAdminComponent extends AbstractViewController<EtatInscriptionDto, EtatInscriptionCriteria, EtatInscriptionAdminService> implements OnInit {


    constructor(private etatInscriptionService: EtatInscriptionAdminService){
        super(etatInscriptionService);
    }

    ngOnInit(): void {
    }




}
