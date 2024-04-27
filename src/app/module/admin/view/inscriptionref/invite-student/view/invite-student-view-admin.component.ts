import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {InviteStudentAdminService} from 'src/app/shared/service/admin/inscriptionref/InviteStudentAdmin.service';
import {InviteStudentDto} from 'src/app/shared/model/inscriptionref/InviteStudent.model';
import {InviteStudentCriteria} from 'src/app/shared/criteria/inscriptionref/InviteStudentCriteria.model';

import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
@Component({
  selector: 'app-invite-student-view-admin',
  templateUrl: './invite-student-view-admin.component.html'
})
export class InviteStudentViewAdminComponent extends AbstractViewController<InviteStudentDto, InviteStudentCriteria, InviteStudentAdminService> implements OnInit {


    constructor(private inviteStudentService: InviteStudentAdminService, private etudiantService: EtudiantAdminService){
        super(inviteStudentService);
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
