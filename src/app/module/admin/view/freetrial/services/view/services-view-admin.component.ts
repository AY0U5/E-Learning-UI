import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ServicesAdminService} from 'src/app/shared/service/admin/freetrial/ServicesAdmin.service';
import {ServicesDto} from 'src/app/shared/model/freetrial/Services.model';
import {ServicesCriteria} from 'src/app/shared/criteria/freetrial/ServicesCriteria.model';

@Component({
  selector: 'app-services-view-admin',
  templateUrl: './services-view-admin.component.html'
})
export class ServicesViewAdminComponent extends AbstractViewController<ServicesDto, ServicesCriteria, ServicesAdminService> implements OnInit {


    constructor(private servicesService: ServicesAdminService){
        super(servicesService);
    }

    ngOnInit(): void {
    }




}
