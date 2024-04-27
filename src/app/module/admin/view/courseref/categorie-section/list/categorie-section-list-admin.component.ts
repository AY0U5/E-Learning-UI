import {Component, OnInit} from '@angular/core';
import {CategorieSectionAdminService} from 'src/app/shared/service/admin/courseref/CategorieSectionAdmin.service';
import {CategorieSectionDto} from 'src/app/shared/model/courseref/CategorieSection.model';
import {CategorieSectionCriteria} from 'src/app/shared/criteria/courseref/CategorieSectionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
import {SuperCategorieSectionDto} from 'src/app/shared/model/courseref/SuperCategorieSection.model';
import {SuperCategorieSectionAdminService} from 'src/app/shared/service/admin/courseref/SuperCategorieSectionAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {SectionItemDto} from 'src/app/shared/model/course/SectionItem.model';
import {SectionItemAdminService} from 'src/app/shared/service/admin/course/SectionItemAdmin.service';


@Component({
  selector: 'app-categorie-section-list-admin',
  templateUrl: './categorie-section-list-admin.component.html'
})
export class CategorieSectionListAdminComponent extends AbstractListController<CategorieSectionDto, CategorieSectionCriteria, CategorieSectionAdminService>  implements OnInit {

    override fileName = 'CategorieSection';


    superCategorieSections: Array<SuperCategorieSectionDto>;


    constructor( private categorieSectionService: CategorieSectionAdminService  , private sectionService: SectionAdminService, private superCategorieSectionService: SuperCategorieSectionAdminService, private coursService: CoursAdminService) {
        super(categorieSectionService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('CategorieSection').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadSuperCategorieSection();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'numeroOrder', header: 'Numero order'},
            {field: 'superCategorieSection?.libelle', header: 'Super categorie section'},
        ];
    }


    public async loadSuperCategorieSection(){
       this.superCategorieSectionService.findAllOptimized().subscribe(superCategorieSections => this.superCategorieSections = superCategorieSections, error => console.log(error))
    }

	public override initDuplicate(res: CategorieSectionDto) {
        if (res.sections != null) {
             res.sections.forEach(d => { d.categorieSection = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                 'Numero order': e.numeroOrder ,
                'Super categorie section': e.superCategorieSection?.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Numero order Min': this.criteria.numeroOrderMin ? this.criteria.numeroOrderMin : environment.emptyForExport ,
            'Numero order Max': this.criteria.numeroOrderMax ? this.criteria.numeroOrderMax : environment.emptyForExport ,
        //'Super categorie section': this.criteria.superCategorieSection?.libelle ? this.criteria.superCategorieSection?.libelle : environment.emptyForExport ,
        }];
      }
}
