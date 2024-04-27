import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {SectionItemAdminService} from 'src/app/shared/service/admin/course/SectionItemAdmin.service';
import {SectionItemDto} from 'src/app/shared/model/course/SectionItem.model';
import {SectionItemCriteria} from 'src/app/shared/criteria/course/SectionItemCriteria.model';
import {SectionDto} from 'src/app/shared/model/course/Section.model';
import {SectionAdminService} from 'src/app/shared/service/admin/course/SectionAdmin.service';
@Component({
  selector: 'app-section-item-create-admin',
  templateUrl: './section-item-create-admin.component.html'
})
export class SectionItemCreateAdminComponent extends AbstractCreateController<SectionItemDto, SectionItemCriteria, SectionItemAdminService>  implements OnInit {



    private _validSectionCode = true;

    constructor( private sectionItemService: SectionItemAdminService , private sectionService: SectionAdminService) {
        super(sectionItemService);
    }

    ngOnInit(): void {
        this.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);
    }





    public override setValidation(value: boolean){
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateSection(section: string) {
    const isPermistted = await this.roleService.isPermitted('Section', 'add');
    if(isPermistted) {
         this.section = new SectionDto();
         this.createSectionDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get section(): SectionDto {
        return this.sectionService.item;
    }
    set section(value: SectionDto) {
        this.sectionService.item = value;
    }
    get sections(): Array<SectionDto> {
        return this.sectionService.items;
    }
    set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
    }
    get createSectionDialog(): boolean {
       return this.sectionService.createDialog;
    }
    set createSectionDialog(value: boolean) {
        this.sectionService.createDialog= value;
    }




    get validSectionCode(): boolean {
        return this._validSectionCode;
    }
    set validSectionCode(value: boolean) {
        this._validSectionCode = value;
    }


}
