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
import {SectionDto} from "../../../../../../shared/model/course/Section.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends AbstractListController<CategorieSectionDto, CategorieSectionCriteria, CategorieSectionAdminService>{


    override fileName = 'CategorieSection';

    categorieSections: Array<CategorieSectionDto>;
    sections: Array<SectionDto>;



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


    public viewsection(dto: CategorieSectionDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.itemseditorSec = this.item.sections;
            // this.viewDialog = true;
        });
    }
    get itemseditorSec(): Array<SectionDto> {
        return this.sectionService.itemseditorSec;
    }

    set itemseditorSec(value: Array<SectionDto>) {
        this.sectionService.itemseditorSec = value;
    }

    public async affichersetion(dto: SectionDto) {
        /*this.itemtoedit = dto;
        console.log(this.itemtoedit);*/
        this.sectionService.findByIdWithAssociatedList(dto).subscribe(res => {
            this.itemtoedit = res;
            console.log(res);
            // this.editDialog = true;
        });
     /*   dto.contenu = this.htmlEditor
        this.itemS = dto
        console.log(this.itemS);
        this.sectionService.edit()*/
    }

    get itemtoedit(): SectionDto {
        return this.sectionService.itemtoedit;
    }

    set itemtoedit(value: SectionDto) {
        this.sectionService.itemtoedit = value;
    }
    get htmlEditor(): string {
        return this.sectionService.htmlEditor;
    }

    set htmlEditor(value: string) {
        this.sectionService.htmlEditor = value;
    }
}
