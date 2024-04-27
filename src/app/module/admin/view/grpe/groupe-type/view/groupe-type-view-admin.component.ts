import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {GroupeTypeAdminService} from 'src/app/shared/service/admin/grpe/GroupeTypeAdmin.service';
import {GroupeTypeDto} from 'src/app/shared/model/grpe/GroupeType.model';
import {GroupeTypeCriteria} from 'src/app/shared/criteria/grpe/GroupeTypeCriteria.model';

@Component({
  selector: 'app-groupe-type-view-admin',
  templateUrl: './groupe-type-view-admin.component.html'
})
export class GroupeTypeViewAdminComponent extends AbstractViewController<GroupeTypeDto, GroupeTypeCriteria, GroupeTypeAdminService> implements OnInit {


    constructor(private groupeTypeService: GroupeTypeAdminService){
        super(groupeTypeService);
    }

    ngOnInit(): void {
    }




}
