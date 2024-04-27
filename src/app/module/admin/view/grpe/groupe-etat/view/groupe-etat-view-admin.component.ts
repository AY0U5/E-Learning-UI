import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {GroupeEtatAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtatAdmin.service';
import {GroupeEtatDto} from 'src/app/shared/model/grpe/GroupeEtat.model';
import {GroupeEtatCriteria} from 'src/app/shared/criteria/grpe/GroupeEtatCriteria.model';

@Component({
  selector: 'app-groupe-etat-view-admin',
  templateUrl: './groupe-etat-view-admin.component.html'
})
export class GroupeEtatViewAdminComponent extends AbstractViewController<GroupeEtatDto, GroupeEtatCriteria, GroupeEtatAdminService> implements OnInit {


    constructor(private groupeEtatService: GroupeEtatAdminService){
        super(groupeEtatService);
    }

    ngOnInit(): void {
    }




}
