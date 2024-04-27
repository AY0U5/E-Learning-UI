import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {AdminAdminService} from 'src/app/shared/service/admin/alc/AdminAdmin.service';
import {AdminDto} from 'src/app/shared/model/alc/Admin.model';
import {AdminCriteria} from 'src/app/shared/criteria/alc/AdminCriteria.model';



@Component({
  selector: 'app-admin-edit-admin',
  templateUrl: './admin-edit-admin.component.html'
})
export class AdminEditAdminComponent extends AbstractEditController<AdminDto, AdminCriteria, AdminAdminService>   implements OnInit {






    constructor( private adminService: AdminAdminService ) {
        super(adminService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
