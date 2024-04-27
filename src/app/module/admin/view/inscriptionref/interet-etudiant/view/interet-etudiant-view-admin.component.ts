import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {InteretEtudiantAdminService} from 'src/app/shared/service/admin/inscriptionref/InteretEtudiantAdmin.service';
import {InteretEtudiantDto} from 'src/app/shared/model/inscriptionref/InteretEtudiant.model';
import {InteretEtudiantCriteria} from 'src/app/shared/criteria/inscriptionref/InteretEtudiantCriteria.model';

@Component({
  selector: 'app-interet-etudiant-view-admin',
  templateUrl: './interet-etudiant-view-admin.component.html'
})
export class InteretEtudiantViewAdminComponent extends AbstractViewController<InteretEtudiantDto, InteretEtudiantCriteria, InteretEtudiantAdminService> implements OnInit {


    constructor(private interetEtudiantService: InteretEtudiantAdminService){
        super(interetEtudiantService);
    }

    ngOnInit(): void {
    }




}
