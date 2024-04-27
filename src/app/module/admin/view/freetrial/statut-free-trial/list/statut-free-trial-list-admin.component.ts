import {Component, OnInit} from '@angular/core';
import {StatutFreeTrialAdminService} from 'src/app/shared/service/admin/freetrial/StatutFreeTrialAdmin.service';
import {StatutFreeTrialDto} from 'src/app/shared/model/freetrial/StatutFreeTrial.model';
import {StatutFreeTrialCriteria} from 'src/app/shared/criteria/freetrial/StatutFreeTrialCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-statut-free-trial-list-admin',
  templateUrl: './statut-free-trial-list-admin.component.html'
})
export class StatutFreeTrialListAdminComponent extends AbstractListController<StatutFreeTrialDto, StatutFreeTrialCriteria, StatutFreeTrialAdminService>  implements OnInit {

    override fileName = 'StatutFreeTrial';




    constructor( private statutFreeTrialService: StatutFreeTrialAdminService  ) {
        super(statutFreeTrialService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('StatutFreeTrial').subscribe(() => {
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
            {field: 'style', header: 'Style'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
                 'Style': e.style ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Style': this.criteria.style ? this.criteria.style : environment.emptyForExport ,
        }];
      }
}
