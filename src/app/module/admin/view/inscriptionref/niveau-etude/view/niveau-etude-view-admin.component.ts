import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {NiveauEtudeAdminService} from 'src/app/shared/service/admin/inscriptionref/NiveauEtudeAdmin.service';
import {NiveauEtudeDto} from 'src/app/shared/model/inscriptionref/NiveauEtude.model';
import {NiveauEtudeCriteria} from 'src/app/shared/criteria/inscriptionref/NiveauEtudeCriteria.model';

@Component({
  selector: 'app-niveau-etude-view-admin',
  templateUrl: './niveau-etude-view-admin.component.html'
})
export class NiveauEtudeViewAdminComponent extends AbstractViewController<NiveauEtudeDto, NiveauEtudeCriteria, NiveauEtudeAdminService> implements OnInit {


    constructor(private niveauEtudeService: NiveauEtudeAdminService){
        super(niveauEtudeService);
    }

    ngOnInit(): void {
    }




}
