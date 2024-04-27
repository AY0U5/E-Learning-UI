import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EtudiantCoursAdminService} from 'src/app/shared/service/admin/profetudiantcours/EtudiantCoursAdmin.service';
import {EtudiantCoursDto} from 'src/app/shared/model/profetudiantcours/EtudiantCours.model';
import {EtudiantCoursCriteria} from 'src/app/shared/criteria/profetudiantcours/EtudiantCoursCriteria.model';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-etudiant-cours-view-admin',
  templateUrl: './etudiant-cours-view-admin.component.html'
})
export class EtudiantCoursViewAdminComponent extends AbstractViewController<EtudiantCoursDto, EtudiantCoursCriteria, EtudiantCoursAdminService> implements OnInit {


    constructor(private etudiantCoursService: EtudiantCoursAdminService, private etudiantService: EtudiantAdminService, private coursService: CoursAdminService, private profService: ProfAdminService){
        super(etudiantCoursService);
    }

    ngOnInit(): void {
    }


    get prof(): ProfDto {
       return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs(): Array<ProfDto> {
       return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get cours(): CoursDto {
       return this.coursService.item;
    }
    set cours(value: CoursDto) {
        this.coursService.item = value;
    }
    get courss(): Array<CoursDto> {
       return this.coursService.items;
    }
    set courss(value: Array<CoursDto>) {
        this.coursService.items = value;
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
