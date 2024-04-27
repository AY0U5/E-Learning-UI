import {Component, OnInit} from '@angular/core';
import {VocabularyAdminService} from 'src/app/shared/service/admin/vocab/VocabularyAdmin.service';
import {VocabularyDto} from 'src/app/shared/model/vocab/Vocabulary.model';
import {VocabularyCriteria} from 'src/app/shared/criteria/vocab/VocabularyCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {VocabularyQuizDto} from 'src/app/shared/model/vocab/VocabularyQuiz.model';
import {VocabularyQuizAdminService} from 'src/app/shared/service/admin/vocab/VocabularyQuizAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';


@Component({
  selector: 'app-vocabulary-list-admin',
  templateUrl: './vocabulary-list-admin.component.html'
})
export class VocabularyListAdminComponent extends AbstractListController<VocabularyDto, VocabularyCriteria, VocabularyAdminService>  implements OnInit {

    override fileName = 'Vocabulary';


    sections: Array<SectionDto>;
    vocabularyQuizs: Array<VocabularyQuizDto>;


    constructor( private vocabularyService: VocabularyAdminService  , private vocabularyQuizService: VocabularyQuizAdminService, private sectionService: SectionAdminService) {
        super(vocabularyService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Vocabulary').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadSection();
                this.loadVocabularyQuiz();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'numero', header: 'Numero'},
            {field: 'word', header: 'Word'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'result', header: 'Result'},
            {field: 'explication', header: 'Explication'},
            {field: 'exemple', header: 'Exemple'},
            {field: 'image', header: 'Image'},
            {field: 'section?.code', header: 'Section'},
            {field: 'vocabularyQuiz?.libelle', header: 'Vocabulary quiz'},
        ];
    }


    public async loadSection(){
       this.sectionService.findAllOptimized().subscribe(sections => this.sections = sections, error => console.log(error))
    }
    public async loadVocabularyQuiz(){
       this.vocabularyQuizService.findAllOptimized().subscribe(vocabularyQuizs => this.vocabularyQuizs = vocabularyQuizs, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Numero': e.numero ,
                 'Word': e.word ,
                 'Libelle': e.libelle ,
                 'Result': e.result ,
                 'Explication': e.explication ,
                 'Exemple': e.exemple ,
                 'Image': e.image ,
                'Section': e.section?.code ,
                'Vocabulary quiz': e.vocabularyQuiz?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Numero Min': this.criteria.numeroMin ? this.criteria.numeroMin : environment.emptyForExport ,
            'Numero Max': this.criteria.numeroMax ? this.criteria.numeroMax : environment.emptyForExport ,
            'Word': this.criteria.word ? this.criteria.word : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Result': this.criteria.result ? this.criteria.result : environment.emptyForExport ,
            'Explication': this.criteria.explication ? this.criteria.explication : environment.emptyForExport ,
            'Exemple': this.criteria.exemple ? this.criteria.exemple : environment.emptyForExport ,
            'Image': this.criteria.image ? this.criteria.image : environment.emptyForExport ,
        //'Section': this.criteria.section?.code ? this.criteria.section?.code : environment.emptyForExport ,
        //'Vocabulary quiz': this.criteria.vocabularyQuiz?.libelle ? this.criteria.vocabularyQuiz?.libelle : environment.emptyForExport ,
        }];
      }
}
