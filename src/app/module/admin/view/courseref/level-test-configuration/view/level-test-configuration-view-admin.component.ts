import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {LevelTestConfigurationAdminService} from 'src/app/shared/service/admin/courseref/LevelTestConfigurationAdmin.service';
import {LevelTestConfigurationDto} from 'src/app/shared/model/courseref/LevelTestConfiguration.model';
import {LevelTestConfigurationCriteria} from 'src/app/shared/criteria/courseref/LevelTestConfigurationCriteria.model';

import {ParcoursDto} from 'src/app/shared/model/course/Parcours.model';
import {ParcoursAdminService} from 'src/app/shared/service/admin/course/ParcoursAdmin.service';
@Component({
  selector: 'app-level-test-configuration-view-admin',
  templateUrl: './level-test-configuration-view-admin.component.html'
})
export class LevelTestConfigurationViewAdminComponent extends AbstractViewController<LevelTestConfigurationDto, LevelTestConfigurationCriteria, LevelTestConfigurationAdminService> implements OnInit {


    constructor(private levelTestConfigurationService: LevelTestConfigurationAdminService, private parcoursService: ParcoursAdminService){
        super(levelTestConfigurationService);
    }

    ngOnInit(): void {
    }


    get parcours(): ParcoursDto {
       return this.parcoursService.item;
    }
    set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
    }
    get parcourss(): Array<ParcoursDto> {
       return this.parcoursService.items;
    }
    set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
    }


}
