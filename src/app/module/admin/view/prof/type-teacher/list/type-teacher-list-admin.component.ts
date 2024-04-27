import {Component, OnInit} from '@angular/core';
import {TypeTeacherAdminService} from 'src/app/shared/service/admin/prof/TypeTeacherAdmin.service';
import {TypeTeacherDto} from 'src/app/shared/model/prof/TypeTeacher.model';
import {TypeTeacherCriteria} from 'src/app/shared/criteria/prof/TypeTeacherCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-type-teacher-list-admin',
  templateUrl: './type-teacher-list-admin.component.html'
})
export class TypeTeacherListAdminComponent extends AbstractListController<TypeTeacherDto, TypeTeacherCriteria, TypeTeacherAdminService>  implements OnInit {

    override fileName = 'TypeTeacher';




    constructor( private typeTeacherService: TypeTeacherAdminService  ) {
        super(typeTeacherService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('TypeTeacher').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
