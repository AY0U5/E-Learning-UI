import {Component, OnInit} from '@angular/core';
import {TypeHomeWorkAdminService} from 'src/app/shared/service/admin/homework/TypeHomeWorkAdmin.service';
import {TypeHomeWorkDto} from 'src/app/shared/model/homework/TypeHomeWork.model';
import {TypeHomeWorkCriteria} from 'src/app/shared/criteria/homework/TypeHomeWorkCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-type-home-work-list-admin',
  templateUrl: './type-home-work-list-admin.component.html'
})
export class TypeHomeWorkListAdminComponent extends AbstractListController<TypeHomeWorkDto, TypeHomeWorkCriteria, TypeHomeWorkAdminService>  implements OnInit {

    override fileName = 'TypeHomeWork';




    constructor( private typeHomeWorkService: TypeHomeWorkAdminService  ) {
        super(typeHomeWorkService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('TypeHomeWork').subscribe(() => {
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
            {field: 'lib', header: 'Lib'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Lib': e.lib ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Lib': this.criteria.lib ? this.criteria.lib : environment.emptyForExport ,
        }];
      }
}
