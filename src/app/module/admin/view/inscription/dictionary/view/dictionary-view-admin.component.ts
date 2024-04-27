import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {DictionaryAdminService} from 'src/app/shared/service/admin/inscription/DictionaryAdmin.service';
import {DictionaryDto} from 'src/app/shared/model/inscription/Dictionary.model';
import {DictionaryCriteria} from 'src/app/shared/criteria/inscription/DictionaryCriteria.model';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
@Component({
  selector: 'app-dictionary-view-admin',
  templateUrl: './dictionary-view-admin.component.html'
})
export class DictionaryViewAdminComponent extends AbstractViewController<DictionaryDto, DictionaryCriteria, DictionaryAdminService> implements OnInit {


    constructor(private dictionaryService: DictionaryAdminService, private etudiantService: EtudiantAdminService){
        super(dictionaryService);
    }

    ngOnInit(): void {
    }


    get etudiant(): EtudiantDto {
       return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants(): Array<EtudiantDto> {
       return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
    }


}
