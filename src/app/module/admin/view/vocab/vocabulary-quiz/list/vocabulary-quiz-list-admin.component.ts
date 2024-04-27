import {Component, OnInit} from '@angular/core';
import {VocabularyQuizAdminService} from 'src/app/shared/service/admin/vocab/VocabularyQuizAdmin.service';
import {VocabularyQuizDto} from 'src/app/shared/model/vocab/VocabularyQuiz.model';
import {VocabularyQuizCriteria} from 'src/app/shared/criteria/vocab/VocabularyQuizCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {VocabularyDto} from 'src/app/shared/model/vocab/Vocabulary.model';
import {VocabularyAdminService} from 'src/app/shared/service/admin/vocab/VocabularyAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';


@Component({
  selector: 'app-vocabulary-quiz-list-admin',
  templateUrl: './vocabulary-quiz-list-admin.component.html'
})
export class VocabularyQuizListAdminComponent extends AbstractListController<VocabularyQuizDto, VocabularyQuizCriteria, VocabularyQuizAdminService>  implements OnInit {

    override fileName = 'VocabularyQuiz';


    sections: Array<SectionDto>;


    constructor( private vocabularyQuizService: VocabularyQuizAdminService  , private vocabularyService: VocabularyAdminService, private sectionService: SectionAdminService) {
        super(vocabularyQuizService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('VocabularyQuiz').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadSection();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'section?.code', header: 'Section'},
        ];
    }


    public async loadSection(){
       this.sectionService.findAllOptimized().subscribe(sections => this.sections = sections, error => console.log(error))
    }

	public override initDuplicate(res: VocabularyQuizDto) {
        if (res.vocabularys != null) {
             res.vocabularys.forEach(d => { d.vocabularyQuiz = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                'Date debut': this.datePipe.transform(e.dateDebut , 'dd/MM/yyyy hh:mm'),
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
                'Section': e.section?.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
        //'Section': this.criteria.section?.code ? this.criteria.section?.code : environment.emptyForExport ,
        }];
      }
}
