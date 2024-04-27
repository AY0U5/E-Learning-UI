import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {AdminAdminService} from 'src/app/shared/service/admin/alc/AdminAdmin.service';
import {AdminDto} from 'src/app/shared/model/alc/Admin.model';
import {AdminCriteria} from 'src/app/shared/criteria/alc/AdminCriteria.model';

@Component({
  selector: 'app-admin-view-admin',
  templateUrl: './admin-view-admin.component.html'
})
export class AdminViewAdminComponent extends AbstractViewController<AdminDto, AdminCriteria, AdminAdminService> implements OnInit {


    constructor(private adminService: AdminAdminService){
        super(adminService);
    }

    ngOnInit(): void {
    }




}
