import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {GroupeEtudeAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtudeAdmin.service';
import {GroupeEtudeDto} from 'src/app/shared/model/grpe/GroupeEtude.model';
import {GroupeEtudeCriteria} from 'src/app/shared/criteria/grpe/GroupeEtudeCriteria.model';

@Component({
  selector: 'app-groupe-etude-view-admin',
  templateUrl: './groupe-etude-view-admin.component.html'
})
export class GroupeEtudeViewAdminComponent extends AbstractViewController<GroupeEtudeDto, GroupeEtudeCriteria, GroupeEtudeAdminService> implements OnInit {


    constructor(private groupeEtudeService: GroupeEtudeAdminService){
        super(groupeEtudeService);
    }

    ngOnInit(): void {
    }




}
