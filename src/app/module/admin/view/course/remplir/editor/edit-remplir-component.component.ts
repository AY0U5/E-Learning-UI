import { Component } from '@angular/core';
import {PreviewComponent} from "./preview/preview.component";
import {ListComponent} from "../list/list.component";
import {
    CategorieSectionAdminService
} from "../../../../../../shared/service/admin/courseref/CategorieSectionAdmin.service";
import {CategorieSectionDto} from "../../../../../../shared/model/courseref/CategorieSection.model";
import {SectionDto} from "../../../../../../shared/model/course/Section.model";
import {SectionAdminService} from "../../../../../../shared/service/admin/course/SectionAdmin.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-remplir-component',
  templateUrl: './edit-remplir-component.component.html',
  styleUrls: ['./edit-remplir-component.component.css'],
    providers:[
        PreviewComponent,
        ListComponent
    ]
})
export class EditRemplirComponentComponent {
   public contenuSection: String;

    get itemtoedit(): SectionDto {
        return this.serviceSection.itemtoedit;
    }

    set itemtoedit(value: SectionDto) {
        this.serviceSection.itemtoedit = value;
    }
    constructor(private listComponent : ListComponent,
                private catService: CategorieSectionAdminService,
                private  serviceSection:SectionAdminService) {
    }

    get htmlEditor(): string {
        return this.serviceSection.htmlEditor;
    }

    set htmlEditor(value: string) {
        this.serviceSection.htmlEditor = value;
    }
    get itemseditorSec(): Array<SectionDto> {
        return this.serviceSection.itemseditorSec;
    }

    set itemseditorSec(value: Array<SectionDto>) {
        this.serviceSection.itemseditorSec = value;
    }


    get item(): SectionDto {
        return this.serviceSection.item;
    }

    set item(value: SectionDto) {
        this.serviceSection.item = value;
    }

   public savehtmlEditor() {
        this.item  = this.itemtoedit;
        console.log(this.item)
       this.serviceSection.edit().subscribe(
          /* const myIndex = this.itemseditorSec.findIndex(e => e.id === this.itemtoedit.id);
           this.itemseditorSec[myIndex] = religion;*/

           // this.itemtoedit = new SectionDto();
       )
       this.itemtoedit = new SectionDto();

     /*   this.serviceSection.edithtmleditor().subscribe(religion=>{
            // this.itemtoedit = this.serviceSection.constrcutDto();
        } , error =>{
            console.log(error);
        });
        console.log(this.itemtoedit)*/
    }


}
