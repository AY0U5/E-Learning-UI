import {Component, OnInit} from '@angular/core';
import {GroupeTypeAdminService} from 'src/app/shared/service/admin/grpe/GroupeTypeAdmin.service';
import {GroupeTypeDto} from 'src/app/shared/model/grpe/GroupeType.model';
import {GroupeTypeCriteria} from 'src/app/shared/criteria/grpe/GroupeTypeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-groupe-type-list-admin',
  templateUrl: './groupe-type-list-admin.component.html'
})
export class GroupeTypeListAdminComponent extends AbstractListController<GroupeTypeDto, GroupeTypeCriteria, GroupeTypeAdminService>  implements OnInit {

    override fileName = 'GroupeType';




    constructor( private groupeTypeService: GroupeTypeAdminService  ) {
        super(groupeTypeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('GroupeType').subscribe(() => {
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
