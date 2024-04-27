import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ReclamationEtudiantAdminService} from 'src/app/shared/service/admin/recomrecla/ReclamationEtudiantAdmin.service';
import {ReclamationEtudiantDto} from 'src/app/shared/model/recomrecla/ReclamationEtudiant.model';
import {ReclamationEtudiantCriteria} from 'src/app/shared/criteria/recomrecla/ReclamationEtudiantCriteria.model';

import {TypeReclamationEtudiantDto} from 'src/app/shared/model/recomrecla/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantAdminService} from 'src/app/shared/service/admin/recomrecla/TypeReclamationEtudiantAdmin.service';
@Component({
  selector: 'app-reclamation-etudiant-view-admin',
  templateUrl: './reclamation-etudiant-view-admin.component.html'
})
export class ReclamationEtudiantViewAdminComponent extends AbstractViewController<ReclamationEtudiantDto, ReclamationEtudiantCriteria, ReclamationEtudiantAdminService> implements OnInit {


    constructor(private reclamationEtudiantService: ReclamationEtudiantAdminService, private typeReclamationEtudiantService: TypeReclamationEtudiantAdminService){
        super(reclamationEtudiantService);
    }

    ngOnInit(): void {
    }


    get typeReclamationEtudiant(): TypeReclamationEtudiantDto {
       return this.typeReclamationEtudiantService.item;
    }
    set typeReclamationEtudiant(value: TypeReclamationEtudiantDto) {
        this.typeReclamationEtudiantService.item = value;
    }
    get typeReclamationEtudiants(): Array<TypeReclamationEtudiantDto> {
       return this.typeReclamationEtudiantService.items;
    }
    set typeReclamationEtudiants(value: Array<TypeReclamationEtudiantDto>) {
        this.typeReclamationEtudiantService.items = value;
    }


}
