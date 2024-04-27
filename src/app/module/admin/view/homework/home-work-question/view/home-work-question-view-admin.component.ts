import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {HomeWorkQuestionAdminService} from 'src/app/shared/service/admin/homework/HomeWorkQuestionAdmin.service';
import {HomeWorkQuestionDto} from 'src/app/shared/model/homework/HomeWorkQuestion.model';
import {HomeWorkQuestionCriteria} from 'src/app/shared/criteria/homework/HomeWorkQuestionCriteria.model';

import {HoweWorkQSTReponseDto} from 'src/app/shared/model/homework/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseAdminService} from 'src/app/shared/service/admin/homework/HoweWorkQSTReponseAdmin.service';
import {TypeDeQuestionDto} from 'src/app/shared/model/quizref/TypeDeQuestion.model';
import {TypeDeQuestionAdminService} from 'src/app/shared/service/admin/quizref/TypeDeQuestionAdmin.service';
import {HomeWorkDto} from 'src/app/shared/model/homework/HomeWork.model';
import {HomeWorkAdminService} from 'src/app/shared/service/admin/homework/HomeWorkAdmin.service';
@Component({
  selector: 'app-home-work-question-view-admin',
  templateUrl: './home-work-question-view-admin.component.html'
})
export class HomeWorkQuestionViewAdminComponent extends AbstractViewController<HomeWorkQuestionDto, HomeWorkQuestionCriteria, HomeWorkQuestionAdminService> implements OnInit {

    howeWorkQSTReponses = new HoweWorkQSTReponseDto();
    howeWorkQSTReponsess: Array<HoweWorkQSTReponseDto> = [];

    constructor(private homeWorkQuestionService: HomeWorkQuestionAdminService, private howeWorkQSTReponseService: HoweWorkQSTReponseAdminService, private typeDeQuestionService: TypeDeQuestionAdminService, private homeWorkService: HomeWorkAdminService){
        super(homeWorkQuestionService);
    }

    ngOnInit(): void {
    }


    get typeDeQuestion(): TypeDeQuestionDto {
       return this.typeDeQuestionService.item;
    }
    set typeDeQuestion(value: TypeDeQuestionDto) {
        this.typeDeQuestionService.item = value;
    }
    get typeDeQuestions(): Array<TypeDeQuestionDto> {
       return this.typeDeQuestionService.items;
    }
    set typeDeQuestions(value: Array<TypeDeQuestionDto>) {
        this.typeDeQuestionService.items = value;
    }
    get homeWork(): HomeWorkDto {
       return this.homeWorkService.item;
    }
    set homeWork(value: HomeWorkDto) {
        this.homeWorkService.item = value;
    }
    get homeWorks(): Array<HomeWorkDto> {
       return this.homeWorkService.items;
    }
    set homeWorks(value: Array<HomeWorkDto>) {
        this.homeWorkService.items = value;
    }


}
