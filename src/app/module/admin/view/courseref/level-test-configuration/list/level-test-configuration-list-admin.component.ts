import {Component, OnInit} from '@angular/core';
import {LevelTestConfigurationAdminService} from 'src/app/shared/service/admin/courseref/LevelTestConfigurationAdmin.service';
import {LevelTestConfigurationDto} from 'src/app/shared/model/courseref/LevelTestConfiguration.model';
import {LevelTestConfigurationCriteria} from 'src/app/shared/criteria/courseref/LevelTestConfigurationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';


@Component({
  selector: 'app-level-test-configuration-list-admin',
  templateUrl: './level-test-configuration-list-admin.component.html'
})
export class LevelTestConfigurationListAdminComponent extends AbstractListController<LevelTestConfigurationDto, LevelTestConfigurationCriteria, LevelTestConfigurationAdminService>  implements OnInit {

    override fileName = 'LevelTestConfiguration';


    parcourss: Array<ParcoursDto>;


    constructor( private levelTestConfigurationService: LevelTestConfigurationAdminService  , private parcoursService: ParcoursAdminService) {
        super(levelTestConfigurationService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('LevelTestConfiguration').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadParcours();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'noteMin', header: 'Note min'},
            {field: 'noteMax', header: 'Note max'},
            {field: 'parcours?.libelle', header: 'Parcours'},
        ];
    }


    public async loadParcours(){
       this.parcoursService.findAllOptimized().subscribe(parcourss => this.parcourss = parcourss, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Note min': e.noteMin ,
                 'Note max': e.noteMax ,
                'Parcours': e.parcours?.libelle ,
            }
        });

        this.criteriaData = [{
            'Note min Min': this.criteria.noteMinMin ? this.criteria.noteMinMin : environment.emptyForExport ,
            'Note min Max': this.criteria.noteMinMax ? this.criteria.noteMinMax : environment.emptyForExport ,
            'Note max Min': this.criteria.noteMaxMin ? this.criteria.noteMaxMin : environment.emptyForExport ,
            'Note max Max': this.criteria.noteMaxMax ? this.criteria.noteMaxMax : environment.emptyForExport ,
        //'Parcours': this.criteria.parcours?.libelle ? this.criteria.parcours?.libelle : environment.emptyForExport ,
        }];
      }
}
