import {Component, OnInit} from '@angular/core';
import {SectionItemAdminService} from 'src/app/shared/service/admin/course/SectionItemAdmin.service';
import {SectionItemDto} from 'src/app/shared/model/course/SectionItem.model';
import {SectionItemCriteria} from 'src/app/shared/criteria/course/SectionItemCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';


@Component({
  selector: 'app-section-item-list-admin',
  templateUrl: './section-item-list-admin.component.html'
})
export class SectionItemListAdminComponent extends AbstractListController<SectionItemDto, SectionItemCriteria, SectionItemAdminService>  implements OnInit {

    override fileName = 'SectionItem';


    sections: Array<SectionDto>;


    constructor( private sectionItemService: SectionItemAdminService  , private sectionService: SectionAdminService) {
        super(sectionItemService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('SectionItem').subscribe(() => {
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
            {field: 'imageUrl', header: 'Image url'},
            {field: 'response', header: 'Response'},
            {field: 'transcription', header: 'Transcription'},
            {field: 'translation', header: 'Translation'},
            {field: 'explanation', header: 'Explanation'},
            {field: 'example', header: 'Example'},
            {field: 'synonyms', header: 'Synonyms'},
            {field: 'section?.code', header: 'Section'},
        ];
    }


    public async loadSection(){
       this.sectionService.findAllOptimized().subscribe(sections => this.sections = sections, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Image url': e.imageUrl ,
                 'Response': e.response ,
                 'Transcription': e.transcription ,
                 'Translation': e.translation ,
                 'Explanation': e.explanation ,
                 'Example': e.example ,
                 'Synonyms': e.synonyms ,
                'Section': e.section?.code ,
            }
        });

        this.criteriaData = [{
            'Image url': this.criteria.imageUrl ? this.criteria.imageUrl : environment.emptyForExport ,
            'Response': this.criteria.response ? this.criteria.response : environment.emptyForExport ,
            'Transcription': this.criteria.transcription ? this.criteria.transcription : environment.emptyForExport ,
            'Translation': this.criteria.translation ? this.criteria.translation : environment.emptyForExport ,
            'Explanation': this.criteria.explanation ? this.criteria.explanation : environment.emptyForExport ,
            'Example': this.criteria.example ? this.criteria.example : environment.emptyForExport ,
            'Synonyms': this.criteria.synonyms ? this.criteria.synonyms : environment.emptyForExport ,
        //'Section': this.criteria.section?.code ? this.criteria.section?.code : environment.emptyForExport ,
        }];
      }
}
