import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeHomeWorkAdminService} from 'src/app/shared/service/admin/homework/TypeHomeWorkAdmin.service';
import {TypeHomeWorkDto} from 'src/app/shared/model/homework/TypeHomeWork.model';
import {TypeHomeWorkCriteria} from 'src/app/shared/criteria/homework/TypeHomeWorkCriteria.model';

@Component({
  selector: 'app-type-home-work-view-admin',
  templateUrl: './type-home-work-view-admin.component.html'
})
export class TypeHomeWorkViewAdminComponent extends AbstractViewController<TypeHomeWorkDto, TypeHomeWorkCriteria, TypeHomeWorkAdminService> implements OnInit {


    constructor(private typeHomeWorkService: TypeHomeWorkAdminService){
        super(typeHomeWorkService);
    }

    ngOnInit(): void {
    }




}
