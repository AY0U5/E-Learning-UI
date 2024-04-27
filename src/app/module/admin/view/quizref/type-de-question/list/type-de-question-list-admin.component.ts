import {Component, OnInit} from '@angular/core';
import {TypeDeQuestionAdminService} from 'src/app/shared/service/admin/quizref/TypeDeQuestionAdmin.service';
import {TypeDeQuestionDto} from 'src/app/shared/model/quizref/TypeDeQuestion.model';
import {TypeDeQuestionCriteria} from 'src/app/shared/criteria/quizref/TypeDeQuestionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-type-de-question-list-admin',
  templateUrl: './type-de-question-list-admin.component.html'
})
export class TypeDeQuestionListAdminComponent extends AbstractListController<TypeDeQuestionDto, TypeDeQuestionCriteria, TypeDeQuestionAdminService>  implements OnInit {

    override fileName = 'TypeDeQuestion';




    constructor( private typeDeQuestionService: TypeDeQuestionAdminService  ) {
        super(typeDeQuestionService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('TypeDeQuestion').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'lib', header: 'Lib'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Lib': e.lib ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Lib': this.criteria.lib ? this.criteria.lib : environment.emptyForExport ,
        }];
      }
}
