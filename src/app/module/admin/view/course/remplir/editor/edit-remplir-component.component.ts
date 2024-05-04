import { Component } from '@angular/core';
import {PreviewComponent} from "./preview/preview.component";
import {ListComponent} from "../list/list.component";
import {
    CategorieSectionAdminService
} from "../../../../../../shared/service/admin/courseref/CategorieSectionAdmin.service";
import {CategorieSectionDto} from "../../../../../../shared/model/courseref/CategorieSection.model";
import {SectionDto} from "../../../../../../shared/model/course/Section.model";
import {SectionAdminService} from "../../../../../../shared/service/admin/course/SectionAdmin.service";

@Component({
  selector: 'app-edit-remplir-component',
  templateUrl: './edit-remplir-component.component.html',
  styleUrls: ['./edit-remplir-component.component.css'],
    providers:[
        PreviewComponent,
        ListComponent
    ]
})
export class EditRemplirComponentComponent{


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

}
