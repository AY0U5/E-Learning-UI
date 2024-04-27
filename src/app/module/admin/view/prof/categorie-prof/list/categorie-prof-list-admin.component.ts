import {Component, OnInit} from '@angular/core';
import {CategorieProfAdminService} from 'src/app/shared/service/admin/prof/CategorieProfAdmin.service';
import {CategorieProfDto} from 'src/app/shared/model/prof/CategorieProf.model';
import {CategorieProfCriteria} from 'src/app/shared/criteria/prof/CategorieProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
import {TypeTeacherDto} from 'src/app/shared/model/prof/TypeTeacher.model';
import {TypeTeacherAdminService} from 'src/app/shared/service/admin/prof/TypeTeacherAdmin.service';
import {RecommendTeacherDto} from 'src/app/shared/model/recomrecla/RecommendTeacher.model';
import {RecommendTeacherAdminService} from 'src/app/shared/service/admin/recomrecla/RecommendTeacherAdmin.service';
import {ProfDto} from 'src/app/shared/model/prof/Prof.model';
import {ProfAdminService} from 'src/app/shared/service/admin/prof/ProfAdmin.service';
import {TrancheHoraireProfDto} from 'src/app/shared/model/prof/TrancheHoraireProf.model';
import {TrancheHoraireProfAdminService} from 'src/app/shared/service/admin/prof/TrancheHoraireProfAdmin.service';
import {ClassRoomDto} from 'src/app/shared/model/classroom/ClassRoom.model';
import {ClassRoomAdminService} from 'src/app/shared/service/admin/classroom/ClassRoomAdmin.service';


@Component({
  selector: 'app-categorie-prof-list-admin',
  templateUrl: './categorie-prof-list-admin.component.html'
})
export class CategorieProfListAdminComponent extends AbstractListController<CategorieProfDto, CategorieProfCriteria, CategorieProfAdminService>  implements OnInit {

    override fileName = 'CategorieProf';




    constructor( private categorieProfService: CategorieProfAdminService  , private parcoursService: ParcoursAdminService, private typeTeacherService: TypeTeacherAdminService, private profService: ProfAdminService) {
        super(categorieProfService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('CategorieProf').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'level', header: 'Level'},
            {field: 'lessonRate', header: 'Lesson rate'},
        ];
    }



	public override initDuplicate(res: CategorieProfDto) {
        if (res.profs != null) {
             res.profs.forEach(d => { d.categorieProf = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Level': e.level ,
                 'Lesson rate': e.lessonRate ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Level': this.criteria.level ? this.criteria.level : environment.emptyForExport ,
            'Lesson rate Min': this.criteria.lessonRateMin ? this.criteria.lessonRateMin : environment.emptyForExport ,
            'Lesson rate Max': this.criteria.lessonRateMax ? this.criteria.lessonRateMax : environment.emptyForExport ,
        }];
      }
}
