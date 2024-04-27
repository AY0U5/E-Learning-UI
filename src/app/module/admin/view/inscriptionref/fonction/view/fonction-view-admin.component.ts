import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FonctionAdminService} from 'src/app/shared/service/admin/inscriptionref/FonctionAdmin.service';
import {FonctionDto} from 'src/app/shared/model/inscriptionref/Fonction.model';
import {FonctionCriteria} from 'src/app/shared/criteria/inscriptionref/FonctionCriteria.model';

@Component({
  selector: 'app-fonction-view-admin',
  templateUrl: './fonction-view-admin.component.html'
})
export class FonctionViewAdminComponent extends AbstractViewController<FonctionDto, FonctionCriteria, FonctionAdminService> implements OnInit {


    constructor(private fonctionService: FonctionAdminService){
        super(fonctionService);
    }

    ngOnInit(): void {
    }




}
