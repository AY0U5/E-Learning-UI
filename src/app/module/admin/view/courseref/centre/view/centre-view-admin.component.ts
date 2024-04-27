import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CentreAdminService} from 'src/app/shared/service/admin/courseref/CentreAdmin.service';
import {CentreDto} from 'src/app/shared/model/courseref/Centre.model';
import {CentreCriteria} from 'src/app/shared/criteria/courseref/CentreCriteria.model';

import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
@Component({
  selector: 'app-centre-view-admin',
  templateUrl: './centre-view-admin.component.html'
})
export class CentreViewAdminComponent extends AbstractViewController<CentreDto, CentreCriteria, CentreAdminService> implements OnInit {

    parcourss = new ParcoursDto();
    parcoursss: Array<ParcoursDto> = [];

    constructor(private centreService: CentreAdminService, private parcoursService: ParcoursAdminService){
        super(centreService);
    }

    ngOnInit(): void {
    }




}
