import {Component, OnInit} from '@angular/core';
import {SkillAdminService} from 'src/app/shared/service/admin/inscriptionref/SkillAdmin.service';
import {SkillDto} from 'src/app/shared/model/inscriptionref/Skill.model';
import {SkillCriteria} from 'src/app/shared/criteria/inscriptionref/SkillCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-skill-list-admin',
  templateUrl: './skill-list-admin.component.html'
})
export class SkillListAdminComponent extends AbstractListController<SkillDto, SkillCriteria, SkillAdminService>  implements OnInit {

    override fileName = 'Skill';




    constructor( private skillService: SkillAdminService  ) {
        super(skillService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Skill').subscribe(() => {
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
