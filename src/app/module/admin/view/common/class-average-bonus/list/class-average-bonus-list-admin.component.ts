import {Component, OnInit} from '@angular/core';
import {ClassAverageBonusAdminService} from 'src/app/shared/service/admin/common/ClassAverageBonusAdmin.service';
import {ClassAverageBonusDto} from 'src/app/shared/model/common/ClassAverageBonus.model';
import {ClassAverageBonusCriteria} from 'src/app/shared/criteria/common/ClassAverageBonusCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-class-average-bonus-list-admin',
  templateUrl: './class-average-bonus-list-admin.component.html'
})
export class ClassAverageBonusListAdminComponent extends AbstractListController<ClassAverageBonusDto, ClassAverageBonusCriteria, ClassAverageBonusAdminService>  implements OnInit {

    override fileName = 'ClassAverageBonus';




    constructor( private classAverageBonusService: ClassAverageBonusAdminService  ) {
        super(classAverageBonusService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('ClassAverageBonus').subscribe(() => {
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
            {field: 'nombreSession', header: 'Nombre session'},
            {field: 'prix', header: 'Prix'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Nombre session': e.nombreSession ,
                 'Prix': e.prix ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Nombre session Min': this.criteria.nombreSessionMin ? this.criteria.nombreSessionMin : environment.emptyForExport ,
            'Nombre session Max': this.criteria.nombreSessionMax ? this.criteria.nombreSessionMax : environment.emptyForExport ,
            'Prix Min': this.criteria.prixMin ? this.criteria.prixMin : environment.emptyForExport ,
            'Prix Max': this.criteria.prixMax ? this.criteria.prixMax : environment.emptyForExport ,
        }];
      }
}
