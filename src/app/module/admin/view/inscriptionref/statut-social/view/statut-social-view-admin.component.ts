import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {StatutSocialAdminService} from 'src/app/shared/service/admin/inscriptionref/StatutSocialAdmin.service';
import {StatutSocialDto} from 'src/app/shared/model/inscriptionref/StatutSocial.model';
import {StatutSocialCriteria} from 'src/app/shared/criteria/inscriptionref/StatutSocialCriteria.model';

@Component({
  selector: 'app-statut-social-view-admin',
  templateUrl: './statut-social-view-admin.component.html'
})
export class StatutSocialViewAdminComponent extends AbstractViewController<StatutSocialDto, StatutSocialCriteria, StatutSocialAdminService> implements OnInit {


    constructor(private statutSocialService: StatutSocialAdminService){
        super(statutSocialService);
    }

    ngOnInit(): void {
    }




}
