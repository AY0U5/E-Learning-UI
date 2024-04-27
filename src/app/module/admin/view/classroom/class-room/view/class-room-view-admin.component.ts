import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ClassRoomAdminService} from 'src/app/shared/service/admin/classroom/ClassRoomAdmin.service';
import {ClassRoomDto} from 'src/app/shared/model/classroom/ClassRoom.model';
import {ClassRoomCriteria} from 'src/app/shared/criteria/classroom/ClassRoomCriteria.model';

import {QuizDto} from 'src/app/shared/model/quiz/Quiz.model';
import {QuizAdminService} from 'src/app/shared/service/admin/quiz/QuizAdmin.service';
import {EtudiantClassRoomDto} from 'src/app/shared/model/inscriptionref/EtudiantClassRoom.model';
import {EtudiantClassRoomAdminService} from 'src/app/shared/service/admin/inscriptionref/EtudiantClassRoomAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/inscription/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/inscription/EtudiantAdmin.service';
import {QuizClassRoomDto} from 'src/app/shared/model/quiz/QuizClassRoom.model';
import {QuizClassRoomAdminService} from 'src/app/shared/service/admin/quiz/QuizClassRoomAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
@Component({
  selector: 'app-class-room-view-admin',
  templateUrl: './class-room-view-admin.component.html'
})
export class ClassRoomViewAdminComponent extends AbstractViewController<ClassRoomDto, ClassRoomCriteria, ClassRoomAdminService> implements OnInit {

    etudiantClassRooms = new EtudiantClassRoomDto();
    etudiantClassRoomss: Array<EtudiantClassRoomDto> = [];
    quizClassRooms = new QuizClassRoomDto();
    quizClassRoomss: Array<QuizClassRoomDto> = [];

    constructor(private classRoomService: ClassRoomAdminService, private quizService: QuizAdminService, private etudiantClassRoomService: EtudiantClassRoomAdminService, private etudiantService: EtudiantAdminService, private quizClassRoomService: QuizClassRoomAdminService, private profService: ProfAdminService){
        super(classRoomService);
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
    get quiz(): QuizDto {
       return this.quizService.item;
    }
    set quiz(value: QuizDto) {
        this.quizService.item = value;
    }
    get quizs(): Array<QuizDto> {
       return this.quizService.items;
    }
    set quizs(value: Array<QuizDto>) {
        this.quizService.items = value;
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
