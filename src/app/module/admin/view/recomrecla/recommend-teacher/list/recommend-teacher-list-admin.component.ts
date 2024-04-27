import {Component, OnInit} from '@angular/core';
import {RecommendTeacherAdminService} from 'src/app/shared/service/admin/recomrecla/RecommendTeacherAdmin.service';
import {RecommendTeacherDto} from 'src/app/shared/model/recomrecla/RecommendTeacher.model';
import {RecommendTeacherCriteria} from 'src/app/shared/criteria/recomrecla/RecommendTeacherCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';


@Component({
  selector: 'app-recommend-teacher-list-admin',
  templateUrl: './recommend-teacher-list-admin.component.html'
})
export class RecommendTeacherListAdminComponent extends AbstractListController<RecommendTeacherDto, RecommendTeacherCriteria, RecommendTeacherAdminService>  implements OnInit {

    override fileName = 'RecommendTeacher';


    profs: Array<ProfDto>;


    constructor( private recommendTeacherService: RecommendTeacherAdminService  , private profService: ProfAdminService) {
        super(recommendTeacherService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('RecommendTeacher').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadProf();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'nombrevote', header: 'Nombrevote'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'telephone', header: 'Telephone'},
            {field: 'login', header: 'Login'},
            {field: 'dateRecommamdation', header: 'Date recommamdation'},
            {field: 'prof?.ref', header: 'Prof'},
        ];
    }


    public async loadProf(){
       this.profService.findAllOptimized().subscribe(profs => this.profs = profs, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Nombrevote': e.nombrevote ,
                 'Nom': e.nom ,
                 'Prenom': e.prenom ,
                 'Commentaire': e.commentaire ,
                 'Telephone': e.telephone ,
                 'Login': e.login ,
                'Date recommamdation': this.datePipe.transform(e.dateRecommamdation , 'dd/MM/yyyy hh:mm'),
                'Prof': e.prof?.ref ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Nombrevote Min': this.criteria.nombrevoteMin ? this.criteria.nombrevoteMin : environment.emptyForExport ,
            'Nombrevote Max': this.criteria.nombrevoteMax ? this.criteria.nombrevoteMax : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
            'Commentaire': this.criteria.commentaire ? this.criteria.commentaire : environment.emptyForExport ,
            'Telephone': this.criteria.telephone ? this.criteria.telephone : environment.emptyForExport ,
            'Login': this.criteria.login ? this.criteria.login : environment.emptyForExport ,
            'Date recommamdation Min': this.criteria.dateRecommamdationFrom ? this.datePipe.transform(this.criteria.dateRecommamdationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date recommamdation Max': this.criteria.dateRecommamdationTo ? this.datePipe.transform(this.criteria.dateRecommamdationTo , this.dateFormat) : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        }];
      }
}
