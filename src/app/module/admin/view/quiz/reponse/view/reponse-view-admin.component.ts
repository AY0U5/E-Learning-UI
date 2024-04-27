import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ReponseAdminService} from 'src/app/shared/service/admin/quiz/ReponseAdmin.service';
import {ReponseDto} from 'src/app/shared/model/quiz/Reponse.model';
import {ReponseCriteria} from 'src/app/shared/criteria/quiz/ReponseCriteria.model';

import {QuestionDto} from 'src/app/shared/model/quiz/Question.model';
import {QuestionAdminService} from 'src/app/shared/service/admin/quiz/QuestionAdmin.service';
@Component({
  selector: 'app-reponse-view-admin',
  templateUrl: './reponse-view-admin.component.html'
})
export class ReponseViewAdminComponent extends AbstractViewController<ReponseDto, ReponseCriteria, ReponseAdminService> implements OnInit {


    constructor(private reponseService: ReponseAdminService, private questionService: QuestionAdminService){
        super(reponseService);
    }

    ngOnInit(): void {
    }


    get question(): QuestionDto {
       return this.questionService.item;
    }
    set question(value: QuestionDto) {
        this.questionService.item = value;
    }
    get questions(): Array<QuestionDto> {
       return this.questionService.items;
    }
    set questions(value: Array<QuestionDto>) {
        this.questionService.items = value;
    }


}
