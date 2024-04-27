import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {SkillAdminService} from 'src/app/shared/service/admin/inscriptionref/SkillAdmin.service';
import {SkillDto} from 'src/app/shared/model/inscriptionref/Skill.model';
import {SkillCriteria} from 'src/app/shared/criteria/inscriptionref/SkillCriteria.model';

@Component({
  selector: 'app-skill-view-admin',
  templateUrl: './skill-view-admin.component.html'
})
export class SkillViewAdminComponent extends AbstractViewController<SkillDto, SkillCriteria, SkillAdminService> implements OnInit {


    constructor(private skillService: SkillAdminService){
        super(skillService);
    }

    ngOnInit(): void {
    }




}
