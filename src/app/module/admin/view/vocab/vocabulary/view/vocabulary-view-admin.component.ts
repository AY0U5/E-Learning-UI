import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {VocabularyAdminService} from 'src/app/shared/service/admin/vocab/VocabularyAdmin.service';
import {VocabularyDto} from 'src/app/shared/model/vocab/Vocabulary.model';
import {VocabularyCriteria} from 'src/app/shared/criteria/vocab/VocabularyCriteria.model';

import {VocabularyQuizDto} from 'src/app/shared/model/vocab/VocabularyQuiz.model';
import {VocabularyQuizAdminService} from 'src/app/shared/service/admin/vocab/VocabularyQuizAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
@Component({
  selector: 'app-vocabulary-view-admin',
  templateUrl: './vocabulary-view-admin.component.html'
})
export class VocabularyViewAdminComponent extends AbstractViewController<VocabularyDto, VocabularyCriteria, VocabularyAdminService> implements OnInit {


    constructor(private vocabularyService: VocabularyAdminService, private vocabularyQuizService: VocabularyQuizAdminService, private sectionService: SectionAdminService){
        super(vocabularyService);
    }

    ngOnInit(): void {
    }


    get vocabularyQuiz(): VocabularyQuizDto {
       return this.vocabularyQuizService.item;
    }
    set vocabularyQuiz(value: VocabularyQuizDto) {
        this.vocabularyQuizService.item = value;
    }
    get vocabularyQuizs(): Array<VocabularyQuizDto> {
       return this.vocabularyQuizService.items;
    }
    set vocabularyQuizs(value: Array<VocabularyQuizDto>) {
        this.vocabularyQuizService.items = value;
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
