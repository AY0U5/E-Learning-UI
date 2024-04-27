import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {LangueAdminService} from 'src/app/shared/service/admin/inscriptionref/LangueAdmin.service';
import {LangueDto} from 'src/app/shared/model/inscriptionref/Langue.model';
import {LangueCriteria} from 'src/app/shared/criteria/inscriptionref/LangueCriteria.model';

@Component({
  selector: 'app-langue-view-admin',
  templateUrl: './langue-view-admin.component.html'
})
export class LangueViewAdminComponent extends AbstractViewController<LangueDto, LangueCriteria, LangueAdminService> implements OnInit {


    constructor(private langueService: LangueAdminService){
        super(langueService);
    }

    ngOnInit(): void {
    }




}
