import {Component, OnInit} from '@angular/core';
import {TeacherLocalityAdminService} from 'src/app/shared/service/admin/inscriptionref/TeacherLocalityAdmin.service';
import {TeacherLocalityDto} from 'src/app/shared/model/inscriptionref/TeacherLocality.model';
import {TeacherLocalityCriteria} from 'src/app/shared/criteria/inscriptionref/TeacherLocalityCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-teacher-locality-list-admin',
  templateUrl: './teacher-locality-list-admin.component.html'
})
export class TeacherLocalityListAdminComponent extends AbstractListController<TeacherLocalityDto, TeacherLocalityCriteria, TeacherLocalityAdminService>  implements OnInit {

    override fileName = 'TeacherLocality';




    constructor( private teacherLocalityService: TeacherLocalityAdminService  ) {
        super(teacherLocalityService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('TeacherLocality').subscribe(() => {
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
            {field: 'libelle', header: 'Libelle'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
