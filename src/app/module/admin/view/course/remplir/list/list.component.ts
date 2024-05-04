import { Component } from '@angular/core';
import {CategorieSectionDto} from "../../../../../../shared/model/courseref/CategorieSection.model";
import {SectionAdminService} from "../../../../../../shared/service/admin/course/SectionAdmin.service";
import {
    CategorieSectionAdminService
} from "../../../../../../shared/service/admin/courseref/CategorieSectionAdmin.service";
import {CoursAdminService} from "../../../../../../shared/service/admin/course/CoursAdmin.service";
import {environment} from "../../../../../../../environments/environment";
import {AbstractListController} from "../../../../../../zynerator/controller/AbstractListController";
import {SuperCategorieSectionDto} from "../../../../../../shared/model/courseref/SuperCategorieSection.model";
import {
    SuperCategorieSectionAdminService
} from "../../../../../../shared/service/admin/courseref/SuperCategorieSectionAdmin.service";
import {CategorieSectionCriteria} from "../../../../../../shared/criteria/courseref/CategorieSectionCriteria.model";
import {CdkStepper} from "@angular/cdk/stepper";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends AbstractListController<CategorieSectionDto, CategorieSectionCriteria, CategorieSectionAdminService>{


    override fileName = 'CategorieSection';

    categorieSections: Array<CategorieSectionDto>;



    constructor( private categorieSectionService: CategorieSectionAdminService  ,
                 private sectionService: SectionAdminService,
                 private superCategorieSectionService: SuperCategorieSectionAdminService,
                 private coursService: CoursAdminService,) {
        super(categorieSectionService);
    }

    ngOnInit(): void {
        this.findAllOrderBy();
    }

    public findAllOrderBy(){
        return this.categorieSectionService.findAll().subscribe(data => {
            this.categorieSections = data
        })
    }
}
