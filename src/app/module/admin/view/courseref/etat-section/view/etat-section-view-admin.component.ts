import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EtatSectionAdminService} from 'src/app/shared/service/admin/courseref/EtatSectionAdmin.service';
import {EtatSectionDto} from 'src/app/shared/model/courseref/EtatSection.model';
import {EtatSectionCriteria} from 'src/app/shared/criteria/courseref/EtatSectionCriteria.model';

@Component({
    selector: 'app-etat-section-view-admin',
    templateUrl: './etat-section-view-admin.component.html'
})
export class EtatSectionViewAdminComponent extends AbstractViewController<EtatSectionDto, EtatSectionCriteria, EtatSectionAdminService> implements OnInit {


    constructor(private etatSectionService: EtatSectionAdminService){
        super(etatSectionService);
    }

    ngOnInit(): void {
    }




}
