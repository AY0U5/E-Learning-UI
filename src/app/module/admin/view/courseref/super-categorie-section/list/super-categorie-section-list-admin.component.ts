import {Component, OnInit} from '@angular/core';
import {SuperCategorieSectionAdminService} from 'src/app/shared/service/admin/courseref/SuperCategorieSectionAdmin.service';
import {SuperCategorieSectionDto} from 'src/app/shared/model/courseref/SuperCategorieSection.model';
import {SuperCategorieSectionCriteria} from 'src/app/shared/criteria/courseref/SuperCategorieSectionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {CategorieSectionDto} from 'src/app/shared/model/courseref/CategorieSection.model';
import {CategorieSectionAdminService} from 'src/app/shared/service/admin/courseref/CategorieSectionAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';


@Component({
  selector: 'app-super-categorie-section-list-admin',
  templateUrl: './super-categorie-section-list-admin.component.html'
})
export class SuperCategorieSectionListAdminComponent extends AbstractListController<SuperCategorieSectionDto, SuperCategorieSectionCriteria, SuperCategorieSectionAdminService>  implements OnInit {

    override fileName = 'SuperCategorieSection';




    constructor( private superCategorieSectionService: SuperCategorieSectionAdminService  , private categorieSectionService: CategorieSectionAdminService) {
        super(superCategorieSectionService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('SuperCategorieSection').subscribe(() => {
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



	public override initDuplicate(res: SuperCategorieSectionDto) {
        if (res.categorieSections != null) {
             res.categorieSections.forEach(d => { d.superCategorieSection = null; d.id = null; });
        }
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
