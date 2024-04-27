import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionCriteria} from 'src/app/shared/criteria/course/SectionCriteria.model';
import {CategorieSectionDto} from 'src/app/shared/model/courseref/CategorieSection.model';
import {CategorieSectionAdminService} from 'src/app/shared/service/admin/courseref/CategorieSectionAdmin.service';
import {CoursDto} from 'src/app/shared/model/course/Cours.model';
import {CoursAdminService} from 'src/app/shared/service/admin/course/CoursAdmin.service';
import {SectionItemDto} from 'src/app/shared/model/course/SectionItem.model';
import {SectionItemAdminService} from 'src/app/shared/service/admin/course/SectionItemAdmin.service';
@Component({
  selector: 'app-section-create-admin',
  templateUrl: './section-create-admin.component.html'
})
export class SectionCreateAdminComponent extends AbstractCreateController<SectionDto, SectionCriteria, SectionAdminService>  implements OnInit {

    private _sectionItemsElement = new SectionItemDto();


   private _validSectionCode = true;
    private _validCategorieSectionCode = true;
    private _validCoursCode = true;
    private _validCoursLibelle = true;

    constructor( private sectionService: SectionAdminService , private categorieSectionService: CategorieSectionAdminService, private coursService: CoursAdminService, private sectionItemService: SectionItemAdminService) {
        super(sectionService);
    }

    ngOnInit(): void {
        this.categorieSection = new CategorieSectionDto();
        this.categorieSectionService.findAll().subscribe((data) => this.categorieSections = data);
        this.cours = new CoursDto();
        this.coursService.findAll().subscribe((data) => this.courss = data);
    }



    validateSectionItems(){
        this.errorMessages = new Array();
    }


    public override setValidation(value: boolean){
        this.validSectionCode = value;
    }

    public addSectionItems() {
        if( this.item.sectionItems == null )
            this.item.sectionItems = new Array<SectionItemDto>();
       this.validateSectionItems();
       if (this.errorMessages.length === 0) {
              this.item.sectionItems.push({... this.sectionItemsElement});
              this.sectionItemsElement = new SectionItemDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletesectionItems(p: SectionItemDto) {
        this.item.sectionItems.forEach((element, index) => {
            if (element === p) { this.item.sectionItems.splice(index, 1); }
        });
    }

    public editsectionItems(p: SectionItemDto) {
        this.sectionItemsElement = {... p};
        this.activeTab = 0;
    }


    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSectionCode();
    }

    public validateSectionCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validSectionCode = false;
        } else {
            this.validSectionCode = true;
        }
    }


    public async openCreateCours(cours: string) {
    const isPermistted = await this.roleService.isPermitted('Cours', 'add');
    if(isPermistted) {
         this.cours = new CoursDto();
         this.createCoursDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get cours(): CoursDto {
        return this.coursService.item;
    }
    set cours(value: CoursDto) {
        this.coursService.item = value;
    }
    get courss(): Array<CoursDto> {
        return this.coursService.items;
    }
    set courss(value: Array<CoursDto>) {
        this.coursService.items = value;
    }
    get createCoursDialog(): boolean {
       return this.coursService.createDialog;
    }
    set createCoursDialog(value: boolean) {
        this.coursService.createDialog= value;
    }
    get categorieSection(): CategorieSectionDto {
        return this.categorieSectionService.item;
    }
    set categorieSection(value: CategorieSectionDto) {
        this.categorieSectionService.item = value;
    }
    get categorieSections(): Array<CategorieSectionDto> {
        return this.categorieSectionService.items;
    }
    set categorieSections(value: Array<CategorieSectionDto>) {
        this.categorieSectionService.items = value;
    }
    get createCategorieSectionDialog(): boolean {
       return this.categorieSectionService.createDialog;
    }
    set createCategorieSectionDialog(value: boolean) {
        this.categorieSectionService.createDialog= value;
    }



    get validSectionCode(): boolean {
        return this._validSectionCode;
    }

    set validSectionCode(value: boolean) {
         this._validSectionCode = value;
    }

    get validCategorieSectionCode(): boolean {
        return this._validCategorieSectionCode;
    }
    set validCategorieSectionCode(value: boolean) {
        this._validCategorieSectionCode = value;
    }
    get validCoursCode(): boolean {
        return this._validCoursCode;
    }
    set validCoursCode(value: boolean) {
        this._validCoursCode = value;
    }
    get validCoursLibelle(): boolean {
        return this._validCoursLibelle;
    }
    set validCoursLibelle(value: boolean) {
        this._validCoursLibelle = value;
    }

    get sectionItemsElement(): SectionItemDto {
        if( this._sectionItemsElement == null )
            this._sectionItemsElement = new SectionItemDto();
        return this._sectionItemsElement;
    }

    set sectionItemsElement(value: SectionItemDto) {
        this._sectionItemsElement = value;
    }

}