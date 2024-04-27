import {Component, OnInit} from '@angular/core';
import {FreeTrialConfigurationAdminService} from 'src/app/shared/service/admin/freetrial/FreeTrialConfigurationAdmin.service';
import {FreeTrialConfigurationDto} from 'src/app/shared/model/freetrial/FreeTrialConfiguration.model';
import {FreeTrialConfigurationCriteria} from 'src/app/shared/criteria/freetrial/FreeTrialConfigurationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-free-trial-configuration-list-admin',
  templateUrl: './free-trial-configuration-list-admin.component.html'
})
export class FreeTrialConfigurationListAdminComponent extends AbstractListController<FreeTrialConfigurationDto, FreeTrialConfigurationCriteria, FreeTrialConfigurationAdminService>  implements OnInit {

    override fileName = 'FreeTrialConfiguration';




    constructor( private freeTrialConfigurationService: FreeTrialConfigurationAdminService  ) {
        super(freeTrialConfigurationService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('FreeTrialConfiguration').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'dateApplicationDebut', header: 'Date application debut'},
            {field: 'dateApplicationFin', header: 'Date application fin'},
            {field: 'nombreStudentMax', header: 'Nombre student max'},
            {field: 'nombreStudentMin', header: 'Nombre student min'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Date application debut': this.datePipe.transform(e.dateApplicationDebut , 'dd/MM/yyyy hh:mm'),
                'Date application fin': this.datePipe.transform(e.dateApplicationFin , 'dd/MM/yyyy hh:mm'),
                 'Nombre student max': e.nombreStudentMax ,
                 'Nombre student min': e.nombreStudentMin ,
            }
        });

        this.criteriaData = [{
            'Date application debut Min': this.criteria.dateApplicationDebutFrom ? this.datePipe.transform(this.criteria.dateApplicationDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date application debut Max': this.criteria.dateApplicationDebutTo ? this.datePipe.transform(this.criteria.dateApplicationDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Date application fin Min': this.criteria.dateApplicationFinFrom ? this.datePipe.transform(this.criteria.dateApplicationFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date application fin Max': this.criteria.dateApplicationFinTo ? this.datePipe.transform(this.criteria.dateApplicationFinTo , this.dateFormat) : environment.emptyForExport ,
            'Nombre student max Min': this.criteria.nombreStudentMaxMin ? this.criteria.nombreStudentMaxMin : environment.emptyForExport ,
            'Nombre student max Max': this.criteria.nombreStudentMaxMax ? this.criteria.nombreStudentMaxMax : environment.emptyForExport ,
            'Nombre student min Min': this.criteria.nombreStudentMinMin ? this.criteria.nombreStudentMinMin : environment.emptyForExport ,
            'Nombre student min Max': this.criteria.nombreStudentMinMax ? this.criteria.nombreStudentMinMax : environment.emptyForExport ,
        }];
      }
}
