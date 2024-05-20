import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EtatParcoursAdminService} from 'src/app/shared/service/admin/courseref/EtatParcoursAdmin.service';
import {EtatParcoursDto} from 'src/app/shared/model/courseref/EtatParcours.model';
import {EtatParcoursCriteria} from 'src/app/shared/criteria/courseref/EtatParcoursCriteria.model';

@Component({
    selector: 'app-etat-parcours-view-admin',
    templateUrl: './etat-parcours-view-admin.component.html'
})
export class EtatParcoursViewAdminComponent extends AbstractViewController<EtatParcoursDto, EtatParcoursCriteria, EtatParcoursAdminService> implements OnInit {


    constructor(private etatParcoursService: EtatParcoursAdminService){
        super(etatParcoursService);
    }

    ngOnInit(): void {
    }




}
