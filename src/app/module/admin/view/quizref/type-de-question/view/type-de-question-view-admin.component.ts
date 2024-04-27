import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeDeQuestionAdminService} from 'src/app/shared/service/admin/quizref/TypeDeQuestionAdmin.service';
import {TypeDeQuestionDto} from 'src/app/shared/model/quizref/TypeDeQuestion.model';
import {TypeDeQuestionCriteria} from 'src/app/shared/criteria/quizref/TypeDeQuestionCriteria.model';

@Component({
  selector: 'app-type-de-question-view-admin',
  templateUrl: './type-de-question-view-admin.component.html'
})
export class TypeDeQuestionViewAdminComponent extends AbstractViewController<TypeDeQuestionDto, TypeDeQuestionCriteria, TypeDeQuestionAdminService> implements OnInit {


    constructor(private typeDeQuestionService: TypeDeQuestionAdminService){
        super(typeDeQuestionService);
    }

    ngOnInit(): void {
    }




}
