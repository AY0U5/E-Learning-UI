import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EtatCoursAdminService} from 'src/app/shared/service/admin/courseref/EtatCoursAdmin.service';
import {EtatCoursDto} from 'src/app/shared/model/courseref/EtatCours.model';
import {EtatCoursCriteria} from 'src/app/shared/criteria/courseref/EtatCoursCriteria.model';

@Component({
  selector: 'app-etat-cours-view-admin',
  templateUrl: './etat-cours-view-admin.component.html'
})
export class EtatCoursViewAdminComponent extends AbstractViewController<EtatCoursDto, EtatCoursCriteria, EtatCoursAdminService> implements OnInit {


    constructor(private etatCoursService: EtatCoursAdminService){
        super(etatCoursService);
    }

    ngOnInit(): void {
    }




}
