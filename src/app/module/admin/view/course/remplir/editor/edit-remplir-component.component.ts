import { Component } from '@angular/core';
import {PreviewComponent} from "./preview/preview.component";
import {ListComponent} from "../list/list.component";
import {
    CategorieSectionAdminService
} from "../../../../../../shared/service/admin/courseref/CategorieSectionAdmin.service";

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

    htmlEditor : string;

    constructor(private listComponent : ListComponent, private catService: CategorieSectionAdminService) {
    }

    public saveContent(){
        return this.catService.save();
    }

}
