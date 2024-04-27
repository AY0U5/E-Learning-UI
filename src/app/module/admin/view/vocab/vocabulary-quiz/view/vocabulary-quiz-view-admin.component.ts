import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {VocabularyQuizAdminService} from 'src/app/shared/service/admin/vocab/VocabularyQuizAdmin.service';
import {VocabularyQuizDto} from 'src/app/shared/model/vocab/VocabularyQuiz.model';
import {VocabularyQuizCriteria} from 'src/app/shared/criteria/vocab/VocabularyQuizCriteria.model';

import {VocabularyDto} from 'src/app/shared/model/vocab/Vocabulary.model';
import {VocabularyAdminService} from 'src/app/shared/service/admin/vocab/VocabularyAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
@Component({
  selector: 'app-vocabulary-quiz-view-admin',
  templateUrl: './vocabulary-quiz-view-admin.component.html'
})
export class VocabularyQuizViewAdminComponent extends AbstractViewController<VocabularyQuizDto, VocabularyQuizCriteria, VocabularyQuizAdminService> implements OnInit {

    vocabularys = new VocabularyDto();
    vocabularyss: Array<VocabularyDto> = [];

    constructor(private vocabularyQuizService: VocabularyQuizAdminService, private vocabularyService: VocabularyAdminService, private sectionService: SectionAdminService){
        super(vocabularyQuizService);
    }

    ngOnInit(): void {
    }


    get section(): SectionDto {
       return this.sectionService.item;
    }
    set section(value: SectionDto) {
        this.sectionService.item = value;
    }
    get sections(): Array<SectionDto> {
       return this.sectionService.items;
    }
    set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
    }


}
