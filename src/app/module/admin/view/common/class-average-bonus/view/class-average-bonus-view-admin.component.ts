import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ClassAverageBonusAdminService} from 'src/app/shared/service/admin/common/ClassAverageBonusAdmin.service';
import {ClassAverageBonusDto} from 'src/app/shared/model/common/ClassAverageBonus.model';
import {ClassAverageBonusCriteria} from 'src/app/shared/criteria/common/ClassAverageBonusCriteria.model';

@Component({
  selector: 'app-class-average-bonus-view-admin',
  templateUrl: './class-average-bonus-view-admin.component.html'
})
export class ClassAverageBonusViewAdminComponent extends AbstractViewController<ClassAverageBonusDto, ClassAverageBonusCriteria, ClassAverageBonusAdminService> implements OnInit {


    constructor(private classAverageBonusService: ClassAverageBonusAdminService){
        super(classAverageBonusService);
    }

    ngOnInit(): void {
    }




}
