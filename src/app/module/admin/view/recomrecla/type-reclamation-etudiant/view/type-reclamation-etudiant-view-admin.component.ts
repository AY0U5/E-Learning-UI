import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeReclamationEtudiantAdminService} from 'src/app/shared/service/admin/recomrecla/TypeReclamationEtudiantAdmin.service';
import {TypeReclamationEtudiantDto} from 'src/app/shared/model/recomrecla/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantCriteria} from 'src/app/shared/criteria/recomrecla/TypeReclamationEtudiantCriteria.model';

@Component({
  selector: 'app-type-reclamation-etudiant-view-admin',
  templateUrl: './type-reclamation-etudiant-view-admin.component.html'
})
export class TypeReclamationEtudiantViewAdminComponent extends AbstractViewController<TypeReclamationEtudiantDto, TypeReclamationEtudiantCriteria, TypeReclamationEtudiantAdminService> implements OnInit {


    constructor(private typeReclamationEtudiantService: TypeReclamationEtudiantAdminService){
        super(typeReclamationEtudiantService);
    }

    ngOnInit(): void {
    }




}
