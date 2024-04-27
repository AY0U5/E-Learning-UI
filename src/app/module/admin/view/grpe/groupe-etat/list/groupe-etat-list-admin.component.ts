import {Component, OnInit} from '@angular/core';
import {GroupeEtatAdminService} from 'src/app/shared/service/admin/grpe/GroupeEtatAdmin.service';
import {GroupeEtatDto} from 'src/app/shared/model/grpe/GroupeEtat.model';
import {GroupeEtatCriteria} from 'src/app/shared/criteria/grpe/GroupeEtatCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-groupe-etat-list-admin',
  templateUrl: './groupe-etat-list-admin.component.html'
})
export class GroupeEtatListAdminComponent extends AbstractListController<GroupeEtatDto, GroupeEtatCriteria, GroupeEtatAdminService>  implements OnInit {

    override fileName = 'GroupeEtat';




    constructor( private groupeEtatService: GroupeEtatAdminService  ) {
        super(groupeEtatService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('GroupeEtat').subscribe(() => {
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
