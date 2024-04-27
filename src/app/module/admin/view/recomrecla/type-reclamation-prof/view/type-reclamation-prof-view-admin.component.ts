import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeReclamationProfAdminService} from 'src/app/shared/service/admin/recomrecla/TypeReclamationProfAdmin.service';
import {TypeReclamationProfDto} from 'src/app/shared/model/recomrecla/TypeReclamationProf.model';
import {TypeReclamationProfCriteria} from 'src/app/shared/criteria/recomrecla/TypeReclamationProfCriteria.model';

@Component({
  selector: 'app-type-reclamation-prof-view-admin',
  templateUrl: './type-reclamation-prof-view-admin.component.html'
})
export class TypeReclamationProfViewAdminComponent extends AbstractViewController<TypeReclamationProfDto, TypeReclamationProfCriteria, TypeReclamationProfAdminService> implements OnInit {


    constructor(private typeReclamationProfService: TypeReclamationProfAdminService){
        super(typeReclamationProfService);
    }

    ngOnInit(): void {
    }




}
